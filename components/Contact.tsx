"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { SplitWords, Reveal } from "@/components/motion/Reveal";
import { budgetCurrencies, contactServices, site, type BudgetCurrency } from "@/data/site";

const empty = { name: "", email: "", company: "", service: "", budget: "", message: "" };

/** Best guess at the visitor's currency from their timezone; they can switch it. */
const guessCurrency = (): BudgetCurrency => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  if (tz === "Africa/Lagos") return "NGN";
  if (tz === "Europe/London") return "GBP";
  if (tz.startsWith("Europe/")) return "EUR";
  return "USD";
};

const promises = ["Fixed price, locked in", "Live in 14 days", "Work directly with the founder", "No long-term contracts"];

const Contact = () => {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [currency, setCurrency] = useState<BudgetCurrency>("USD");
  useEffect(() => setCurrency(guessCurrency()), []);
  const set = (key: keyof typeof empty, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb bottom-0 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 text-copper/20" />
      </div>

      <div className="wrap relative">
        <Reveal>
          <span className="eyebrow">Start a project</span>
        </Reveal>
        <h2 className="display mt-8 max-w-[14ch] text-[clamp(3rem,8.4vw,7.6rem)] text-bone">
          <SplitWords text="Stop planning. Start shipping." italicFrom={2} />
        </h2>
        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-2 text-bone/90">
                <Check size={16} className="text-copper" /> {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            <p className="lede">
              Tell us about your idea. Within 24 hours you&apos;ll get a personal reply to set up your free
              one-hour scope call.
            </p>
            <ul className="divide-y divide-white/[0.07] border-y hairline">
              {[
                { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                { Icon: MessageCircle, label: "WhatsApp", value: site.whatsapp, href: site.whatsappLink },
                { Icon: Clock, label: "Response time", value: "Within 24 hours" },
                { Icon: MapPin, label: "Location", value: site.location },
              ].map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4 py-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-copper/25 bg-copper/10 text-copper-2">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="font-mono text-[0.66rem] tracking-[0.16em] text-mute uppercase">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="link-underline text-bone"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-bone">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card !rounded-[32px] bg-night-2 p-6 sm:p-10">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-copper-2 to-copper text-night"
                    >
                      <Check size={34} strokeWidth={2.5} />
                    </motion.span>
                    <h3 className="mt-8 font-display text-4xl text-bone">Message received.</h3>
                    <p className="mt-3 max-w-sm text-mute">
                      Thank you — we read every enquiry personally and will reply within 24 hours.
                    </p>
                    <button onClick={() => setStatus("idle")} className="btn btn-ghost mt-8">
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" exit={{ opacity: 0 }} onSubmit={submit} className="grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-name" className="field-label">Your name</label>
                        <input id="c-name" className="field" required autoComplete="name" placeholder="Ada Lovelace" value={form.name} onChange={(e) => set("name", e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="c-email" className="field-label">Email</label>
                        <input id="c-email" className="field" type="email" required autoComplete="email" placeholder="ada@startup.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-company" className="field-label">Startup / project</label>
                        <input id="c-company" className="field" autoComplete="organization" placeholder="What's it called?" value={form.company} onChange={(e) => set("company", e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="c-service" className="field-label">What do you need?</label>
                        <select id="c-service" className="field" required value={form.service} onChange={(e) => set("service", e.target.value)}>
                          <option value="">Choose one…</option>
                          {contactServices.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <fieldset>
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <legend className="field-label !mb-0">Budget</legend>
                        <div role="group" aria-label="Currency" className="flex rounded-full border border-white/10 p-0.5">
                          {(Object.keys(budgetCurrencies) as BudgetCurrency[]).map((c) => (
                            <button
                              key={c}
                              type="button"
                              aria-pressed={currency === c}
                              onClick={() => {
                                setCurrency(c);
                                set("budget", "");
                              }}
                              className={`rounded-full px-3 py-1 font-mono text-[0.68rem] tracking-wider transition-colors ${
                                currency === c ? "bg-copper text-night" : "text-mute hover:text-bone"
                              }`}
                            >
                              {budgetCurrencies[c].symbol} {c}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[...budgetCurrencies[currency].ranges, "Not sure yet"].map((b) => (
                          <label
                            key={b}
                            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-2 ${
                              form.budget === b
                                ? "border-copper bg-copper/15 text-copper-2"
                                : "border-white/10 text-mute hover:border-white/25 hover:text-bone"
                            }`}
                          >
                            <input type="radio" name="budget" value={b} className="sr-only" checked={form.budget === b} onChange={() => set("budget", b)} />
                            {b}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                    <div>
                      <label htmlFor="c-message" className="field-label">Tell us about your idea</label>
                      <textarea
                        id="c-message"
                        className="field min-h-36 resize-y"
                        rows={5}
                        required
                        placeholder="What problem does it solve? Who is it for? Any deadline we should know about?"
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                      />
                    </div>

                    {status === "error" && (
                      <p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                        Something went wrong. Please try again, or email us at {site.email}.
                      </p>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <p className="text-xs text-dim">We&apos;ll never share your details.</p>
                      <button type="submit" className="btn btn-copper" disabled={status === "sending"}>
                        {status === "sending" ? "Sending…" : "Send enquiry"}
                        {status !== "sending" && <ArrowRight size={17} />}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
