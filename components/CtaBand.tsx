"use client";

import { useState } from "react";
import EmailModal from "./EmailModal";

const CtaBand = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="cta-band"
        style={{
          padding: "6rem 5%",
          position: "relative",
          textAlign: "center",
          background: "var(--brand-tint)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="section-label reveal" style={{ justifyContent: "center" }}>
          Ready to Launch
        </div>
        <h2
          className="font-display reveal reveal-delay-1"
          style={{
            fontWeight: 600,
            fontSize: "clamp(2.3rem,5vw,3.6rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: "1rem",
          }}
        >
          Your Startup Idea
          <br />
          <span style={{ fontStyle: "italic", color: "var(--brand)" }}>Deserves Real Execution.</span>
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{ color: "var(--ink-soft)", fontSize: "1.05rem", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.7 }}
        >
          Get a fixed scope + price in one hour. Then we build your MVP in 14
          days. No BS, no surprises.
        </p>
        <div className="reveal reveal-delay-3" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
            Book Your Free Scope Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-ghost"
            style={{ fontSize: "1.05rem", padding: "1rem 2.5rem", background: "var(--paper)" }}
          >
            Send an Email
          </button>
        </div>
      </section>

      <EmailModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default CtaBand;
