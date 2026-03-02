"use client";

import { useState, useEffect, FormEvent } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const EmailModal = ({ open, onClose }: Props) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

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
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(5,5,8,0.85)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        animation: "fadeUp .35s ease both",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 520,
          background: "#0a0a12",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 24, padding: "2.5rem",
          position: "relative",
        }}
      >
        {/* close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16,
            background: "none", border: "none", color: "rgba(240,240,248,0.45)",
            fontSize: "1.5rem", cursor: "none", lineHeight: 1,
          }}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="section-label" style={{ justifyContent: "center" }}>Get in Touch</div>
        <h3
          className="font-syne"
          style={{
            fontWeight: 800, fontSize: "clamp(1.4rem,3vw,1.8rem)",
            textAlign: "center", color: "#f0f0f8",
            marginBottom: "0.5rem",
          }}
        >
          Send Us a Message
        </h3>
        <p style={{ textAlign: "center", color: "rgba(240,240,248,0.45)", fontSize: "0.9rem", marginBottom: "2rem", lineHeight: 1.7 }}>
          We'll get back to you within 24 hours.
        </p>

        {status === "sent" ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>&#10003;</div>
            <p className="font-syne" style={{ fontWeight: 700, fontSize: "1.2rem", color: "#00f5a0", marginBottom: "0.5rem" }}>
              Message Sent!
            </p>
            <p style={{ color: "rgba(240,240,248,0.45)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              We'll be in touch soon.
            </p>
            <button onClick={onClose} className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.75rem 2rem" }}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              className="form-input"
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="form-input"
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              className="form-input"
              placeholder="Tell us about your project..."
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ resize: "vertical", minHeight: 100 }}
            />

            {status === "error" && (
              <p style={{ color: "#ff5c5c", fontSize: "0.85rem", textAlign: "center" }}>
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={status === "sending"}
              style={{
                width: "100%", justifyContent: "center",
                fontSize: "1rem", padding: "1rem",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              {status !== "sending" && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailModal;
