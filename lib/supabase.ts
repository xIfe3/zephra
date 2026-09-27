/**
 * Minimal server-only Supabase REST helpers (no SDK needed).
 * Requires SUPABASE_URL and SUPABASE_SECRET_KEY (sb_secret_ key; legacy SUPABASE_SERVICE_ROLE_KEY also works)
 * — never expose it to the browser.
 */

function config() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return {
    endpoint: `${url.replace(/\/$/, "")}/rest/v1`,
    headers: {
      apikey: key,
      // Legacy service_role keys are JWTs and also go in Authorization; new sb_secret_ keys only use apikey.
      ...(key.startsWith("eyJ") ? { Authorization: `Bearer ${key}` } : {}),
      "Content-Type": "application/json",
    } as Record<string, string>,
  };
}

export type Enquiry = {
  name: string;
  email: string;
  message: string;
  company?: string;
  service?: string;
  budget?: string;
  source?: string;
};

/** Saves an enquiry. Never throws — a DB outage (e.g. paused free project) must not lose the email/ping. */
export async function saveEnquiry(enquiry: Enquiry) {
  const cfg = config();
  if (!cfg) return;
  try {
    const res = await fetch(`${cfg.endpoint}/enquiries`, {
      method: "POST",
      headers: { ...cfg.headers, Prefer: "return=minimal" },
      body: JSON.stringify({
        name: enquiry.name,
        email: enquiry.email,
        message: enquiry.message,
        company: enquiry.company || null,
        service: enquiry.service || null,
        budget: enquiry.budget || null,
        source: enquiry.source || "website",
      }),
    });
    if (!res.ok) console.error("Supabase insert failed:", res.status, await res.text());
  } catch (err) {
    console.error("Supabase insert failed:", err);
  }
}

/** Cheap read used by the daily cron so the free-tier project never idles into a pause. */
export async function pingDatabase() {
  const cfg = config();
  if (!cfg) return { ok: false, reason: "not configured" };
  const res = await fetch(`${cfg.endpoint}/enquiries?select=id&limit=1`, {
    headers: cfg.headers,
    cache: "no-store",
  });
  return { ok: res.ok, status: res.status };
}
