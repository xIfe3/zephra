"use client";
import React from "react";

const contactItems = [
  { icon: "✉️", label: "Email", value: "hello@zephra.dev" },
  { icon: "💬", label: "WhatsApp", value: "+234 811 320 8256" },
  { icon: "🕐", label: "Response Time", value: "Within 24 hours" },
  { icon: "🌍", label: "Location", value: "Nigeria · Working Globally" },
];

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: "0.875rem 1.1rem",
  color: "#f0f0f8",
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.95rem",
  outline: "none",
  width: "100%",
  transition: "border-color 0.3s, background 0.3s",
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;
    const orig = btn.innerHTML;
    btn.textContent = "✓ Message Sent!";
    btn.style.cssText =
      "background:rgba(0,245,160,.25);color:#00f5a0;border:1px solid rgba(0,245,160,.35);padding:0.875rem 2.25rem;border-radius:100px;font-family:'Outfit',sans-serif;font-weight:700;font-size:1rem;cursor:none;";
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.cssText = "";
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  const focusIn = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    e.target.style.borderColor = "rgba(0,245,160,.5)";
    e.target.style.background = "rgba(0,245,160,.03)";
  };
  const focusOut = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    e.target.style.borderColor = "rgba(255,255,255,0.08)";
    e.target.style.background = "rgba(255,255,255,0.04)";
  };

  return (
    <section
      id="contact"
      className="bg-bg2"
      style={{ padding: "7rem 5%", position: "relative" }}
    >
      <style>{`
        .contact-grid { display:grid; grid-template-columns:1fr; gap:4rem; }
        @media(min-width:1024px){ .contact-grid { grid-template-columns:1fr 1.2fr; gap:6rem; } }
        .form-row { display:grid; grid-template-columns:1fr; gap:1rem; }
        @media(min-width:640px){ .form-row { grid-template-columns:1fr 1fr; } }
      `}</style>

      <div className="section-label reveal">Contact</div>
      <h2
        className="font-syne reveal reveal-delay-1"
        style={{
          fontWeight: 800,
          fontSize: "clamp(2rem,4vw,3.2rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "#f0f0f8",
          marginBottom: "1rem",
        }}
      >
        Start a Conversation
      </h2>
      <p
        className="reveal reveal-delay-2"
        style={{
          color: "rgba(240,240,248,0.45)",
          fontSize: "1.05rem",
          lineHeight: 1.7,
          maxWidth: 520,
          marginBottom: "3.5rem",
        }}
      >
        Tell us what you're building. We'll respond within 24 hours with honest
        feedback and next steps.
      </p>

      <div className="contact-grid">
        {/* Info */}
        <div className="reveal">
          {contactItems.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(0,245,160,.08)",
                  border: "1px solid rgba(0,245,160,.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "rgba(240,240,248,0.45)",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "#f0f0f8",
                    marginTop: 2,
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: "2rem",
              padding: "1.5rem",
              background: "rgba(0,245,160,.05)",
              border: "1px solid rgba(0,245,160,.15)",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#00f5a0",
                marginBottom: "0.5rem",
              }}
            >
              Currently Available
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(240,240,248,0.45)",
                lineHeight: 1.7,
              }}
            >
              We're accepting new projects starting{" "}
              <strong style={{ color: "#f0f0f8" }}>March 2026.</strong> Slots
              are limited — reach out now to reserve your spot.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          className="reveal reveal-delay-1"
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <div className="form-row">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "rgba(240,240,248,0.45)",
                  fontWeight: 500,
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                style={inputStyle}
                onFocus={focusIn}
                onBlur={focusOut}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "rgba(240,240,248,0.45)",
                  fontWeight: 500,
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                required
                style={inputStyle}
                onFocus={focusIn}
                onBlur={focusOut}
              />
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <label
              style={{
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "rgba(240,240,248,0.45)",
                fontWeight: 500,
              }}
            >
              Company / Project Name
            </label>
            <input
              type="text"
              placeholder="What are we building?"
              style={inputStyle}
              onFocus={focusIn}
              onBlur={focusOut}
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <label
              style={{
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "rgba(240,240,248,0.45)",
                fontWeight: 500,
              }}
            >
              Service Needed
            </label>
            <select
              style={{ ...inputStyle, appearance: "none" }}
              onFocus={focusIn}
              onBlur={focusOut}
            >
              <option value="">Select a service...</option>
              {[
                "Web Development",
                "Mobile App",
                "Backend / API",
                "UI/UX Redesign",
                "AI Integration",
                "Full Product Build",
                "Not sure yet",
              ].map((o) => (
                <option key={o} style={{ background: "#1a1a24" }}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <label
              style={{
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "rgba(240,240,248,0.45)",
                fontWeight: 500,
              }}
            >
              Tell Us More
            </label>
            <textarea
              rows={5}
              placeholder="Describe your project, timeline, budget range — the more detail, the better we can help..."
              style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
              onFocus={focusIn}
              onBlur={focusOut}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ alignSelf: "flex-start" }}
          >
            Send Message
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
