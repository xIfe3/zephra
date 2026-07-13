import { Resend } from "resend";
import { NextResponse } from "next/server";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildEmailHtml(name: string, email: string, message: string, company?: string, service?: string) {
  const escapedMessage = esc(message).replace(/\n/g, "<br/>");
  const escapedCompany = company ? esc(company) : "";
  const escapedService = service ? esc(service) : "";

  const extraRows = [
    escapedCompany && { label: "Company / Project", value: escapedCompany },
    escapedService && { label: "Service Needed", value: escapedService },
  ].filter(Boolean) as { label: string; value: string }[];

  const extraHtml = extraRows
    .map(
      (r) => `
            <tr><td style="height:10px;"></td></tr>
            <tr>
              <td style="padding:14px 16px;background:#f6f1ea;border:1px solid #e5ddd2;border-radius:10px;">
                <p style="margin:0 0 3px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#96897b;">${r.label}</p>
                <p style="margin:0;font-size:15px;color:#221e1b;font-weight:600;">${r.value}</p>
              </td>
            </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f6f1ea;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f1ea;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <!-- Logo -->
        <tr><td style="padding-bottom:24px;text-align:center;">
          <span style="font-size:24px;font-weight:800;color:#221e1b;letter-spacing:-0.02em;">
            Zephra<span style="color:#8a4e29;">.</span>
          </span>
        </td></tr>

        <!-- Accent bar + Card -->
        <tr><td style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px #0000000f;">

          <!-- Top accent bar -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="height:4px;background:#8a4e29;"></td>
            </tr>
          </table>

          <!-- Header -->
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 32px 20px;">
            <tr><td>
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#8a4e29;">
                New Enquiry
              </p>
              <h1 style="margin:0;font-size:22px;font-weight:800;color:#221e1b;line-height:1.25;">
                Message from ${name}
              </h1>
            </td></tr>
          </table>

          <!-- Info rows -->
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:0 32px;">
            <tr>
              <td style="padding:14px 16px;background:#f6f1ea;border:1px solid #e5ddd2;border-radius:10px;">
                <p style="margin:0 0 3px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#96897b;">Name</p>
                <p style="margin:0;font-size:15px;color:#221e1b;font-weight:600;">${name}</p>
              </td>
            </tr>
            <tr><td style="height:10px;"></td></tr>
            <tr>
              <td style="padding:14px 16px;background:#f6f1ea;border:1px solid #e5ddd2;border-radius:10px;">
                <p style="margin:0 0 3px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#96897b;">Email</p>
                <a href="mailto:${email}" style="font-size:15px;color:#8a4e29;font-weight:600;text-decoration:none;">${email}</a>
              </td>
            </tr>${extraHtml}
          </table>

          <!-- Divider -->
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 32px 0;">
            <tr><td style="height:1px;background:#e5ddd2;"></td></tr>
          </table>

          <!-- Message -->
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 32px 8px;">
            <tr><td>
              <p style="margin:0 0 10px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#96897b;">Message</p>
              <p style="margin:0;font-size:15px;color:#332e29;line-height:1.75;">${escapedMessage}</p>
            </td></tr>
          </table>

          <!-- Reply button -->
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:28px 32px 36px;">
            <tr><td>
              <a href="mailto:${email}" style="display:inline-block;background:#8a4e29;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:14px;font-weight:700;">
                Reply to ${name} &rarr;
              </a>
            </td></tr>
          </table>

        </td></tr>

        <!-- Footer -->
        <tr><td style="padding-top:24px;text-align:center;">
          <p style="margin:0;font-size:12px;color:#96897b;line-height:1.7;">
            Sent via the contact form on
            <a href="https://zephra.dev" style="color:#8a4e29;text-decoration:none;">zephra.dev</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message, company, service } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const subject = company
      ? `New enquiry from ${name} — ${company}`
      : `New enquiry from ${name}`;

    await resend.emails.send({
      from: "Zephra Contact <contact@zephra.dev>",
      to: "hello@zephra.dev",
      replyTo: email,
      subject,
      html: buildEmailHtml(name, email, message, company, service),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
