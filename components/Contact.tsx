"use client";

import { useState, FormEvent } from "react";

const contactItems = [
  { icon: "\u2709\uFE0F", label: "Email", value: "hello@zephra.dev" },
  { icon: "\uD83D\uDCAC", label: "WhatsApp", value: "+234 811 320 8256" },
  { icon: "\uD83D\uDD50", label: "Response Time", value: "Within 24 hours" },
  { icon: "\uD83C\uDF0D", label: "Location", value: "Nigeria \u00B7 Working Globally" },
];

const services = [
  "Web Development",
  "Mobile App",
  "Backend / API",
  "UI/UX Redesign",
  "AI Integration",
  "Full Product Build",
  "Not sure yet",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
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
      setForm({ name: "", email: "", company: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setForm({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="bg-bg2" style={{ padding: "7rem 5%", position: "relative" }}>
      <style>{`
        .contact-grid { display:grid; grid-template-columns:1fr; gap:4rem; }
        @media(min-width:1024px){ .contact-grid { grid-template-columns:1fr 1.2fr; gap:6rem; } }
        .contact-form-row { display:grid; grid-template-columns:1fr; gap:1rem; }
        @media(min-width:640px){ .contact-form-row { grid-template-columns:1fr 1fr; } }
        .contact-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 0.875rem 1.1rem;
          color: #f0f0f8;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          outline: none;
          width: 100%;
          transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
        }
        .contact-input::placeholder { color: rgba(240,240,248,0.25); }
        .contact-input:focus {
          border-color: rgba(0,229,255,.5);
          background: rgba(0,229,255,.03);
          box-shadow: 0 0 0 3px rgba(0,229,255,.08);
        }
        .contact-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: rgba(240,240,248,0.45);
          font-weight: 500;
          margin-bottom: 0.5rem;
          display: block;
        }
        .contact-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 3rem 1.5rem;
          background: rgba(0,229,255,.03);
          border: 1px solid rgba(0,229,255,.12);
          border-radius: 20px;
          min-height: 400px;
        }
        .contact-success-icon {
          width: 64px; height: 64px; border-radius: 50%;
          background: rgba(0,229,255,.1); border: 1px solid rgba(0,229,255,.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem; color: #00e5ff; margin-bottom: 1.5rem;
        }
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
        Tell us what you&apos;re building. We&apos;ll respond within 24 hours with honest
        feedback and next steps.
      </p>

      <div className="contact-grid">
        {/* Info column */}
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
                  background: "rgba(0,229,255,.08)",
                  border: "1px solid rgba(0,229,255,.15)",
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
              background: "rgba(0,229,255,.05)",
              border: "1px solid rgba(0,229,255,.15)",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#00e5ff",
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
              We&apos;re accepting new projects starting{" "}
              <strong style={{ color: "#f0f0f8" }}>March 2026.</strong> Slots
              are limited — reach out now to reserve your spot.
            </p>
          </div>
        </div>

        {/* Form column */}
        {status === "sent" ? (
          <div className="contact-success">
            <div className="contact-success-icon">&#10003;</div>
            <h3
              className="font-syne"
              style={{
                fontWeight: 700,
                fontSize: "1.4rem",
                color: "#00e5ff",
                marginBottom: "0.5rem",
              }}
            >
              Message Sent Successfully!
            </h3>
            <p
              style={{
                color: "rgba(240,240,248,0.45)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                maxWidth: 340,
                marginBottom: "2rem",
              }}
            >
              Thanks for reaching out. We&apos;ll review your message and get back to you within 24 hours.
            </p>
            <button onClick={resetForm} className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 2.25rem" }}>
              Send Another Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div className="contact-form-row">
              <div>
                <label className="contact-label">Your Name</label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              </div>
              <div>
                <label className="contact-label">Email</label>
                <input
                  className="contact-input"
                  type="email"
                  placeholder="john@company.com"
                  required
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div>
                <label className="contact-label">Company / Project Name</label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="What are we building?"
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                />
              </div>
              <div>
                <label className="contact-label">Service Needed</label>
                <select
                  className="contact-input"
                  style={{ appearance: "none" }}
                  value={form.service}
                  onChange={(e) => set("service", e.target.value)}
                >
                  <option value="">Select a service...</option>
                  {services.map((o) => (
                    <option key={o} style={{ background: "#1a1a24" }}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="contact-label">Tell Us More</label>
              <textarea
                className="contact-input"
                rows={5}
                placeholder="Describe your project, timeline, budget range — the more detail, the better we can help..."
                required
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                style={{ resize: "vertical", minHeight: 120 }}
              />
            </div>

            {status === "error" && (
              <div
                style={{
                  padding: "0.85rem 1.1rem",
                  background: "rgba(255,92,92,.08)",
                  border: "1px solid rgba(255,92,92,.2)",
                  borderRadius: 12,
                  color: "#ff5c5c",
                  fontSize: "0.88rem",
                  textAlign: "center",
                }}
              >
                Something went wrong. Please try again or email us directly at hello@zephra.dev
              </div>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={status === "sending"}
              style={{
                alignSelf: "flex-start",
                opacity: status === "sending" ? 0.7 : 1,
                pointerEvents: status === "sending" ? "none" : "auto",
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              {status !== "sending" && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
