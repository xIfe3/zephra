import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function buildEmailHtml(name: string, email: string, message: string) {
  const escapedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#050508;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050508;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <!-- Logo -->
        <tr><td style="padding-bottom:32px;text-align:center;">
          <span style="font-size:22px;font-weight:800;color:#f0f0f8;letter-spacing:-0.03em;">
            Zephra<span style="color:#00f5a0;">.</span>
          </span>
        </td></tr>

        <!-- Card -->
        <tr><td style="background:#0a0a12;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">

          <!-- Accent bar -->
          <div style="height:3px;background:linear-gradient(90deg,#00f5a0,#00c8ff);"></div>

          <!-- Header -->
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 32px 0;">
            <tr><td>
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#00f5a0;">
                &#9135; New Enquiry
              </p>
              <h1 style="margin:0;font-size:22px;font-weight:800;color:#f0f0f8;line-height:1.2;">
                Message from ${name}
              </h1>
            </td></tr>
          </table>

          <!-- Info rows -->
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 32px;">
            <tr>
              <td style="padding:12px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;margin-bottom:8px;">
                <p style="margin:0 0 2px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:rgba(240,240,248,0.35);">Name</p>
                <p style="margin:0;font-size:15px;color:#f0f0f8;font-weight:600;">${name}</p>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="padding:12px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;">
                <p style="margin:0 0 2px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:rgba(240,240,248,0.35);">Email</p>
                <a href="mailto:${email}" style="font-size:15px;color:#00f5a0;font-weight:600;text-decoration:none;">${email}</a>
              </td>
            </tr>
          </table>

          <!-- Divider -->
          <div style="margin:0 32px;height:1px;background:rgba(255,255,255,0.06);"></div>

          <!-- Message -->
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 32px 32px;">
            <tr><td>
              <p style="margin:0 0 8px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:rgba(240,240,248,0.35);">Message</p>
              <p style="margin:0;font-size:15px;color:rgba(240,240,248,0.75);line-height:1.7;">${escapedMessage}</p>
            </td></tr>
          </table>

          <!-- Reply button -->
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:0 32px 32px;">
            <tr><td align="center">
              <a href="mailto:${email}" style="display:inline-block;background:#00f5a0;color:#020906;text-decoration:none;padding:12px 32px;border-radius:100px;font-size:14px;font-weight:700;">
                Reply to ${name} &rarr;
              </a>
            </td></tr>
          </table>

        </td></tr>

        <!-- Footer -->
        <tr><td style="padding-top:24px;text-align:center;">
          <p style="margin:0;font-size:12px;color:rgba(240,240,248,0.25);line-height:1.6;">
            This message was sent from the contact form on<br/>
            <a href="https://zephra.dev" style="color:#00f5a0;text-decoration:none;">zephra.dev</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Zephra Contact <contact@zephra.dev>",
      to: "hello@zephra.dev",
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: buildEmailHtml(name, email, message),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
