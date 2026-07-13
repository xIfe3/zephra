"use client";

const testimonials = [
  {
    initials: "AK",
    name: "Adewale Kolade",
    role: "CEO, FlowAnalytics",
    status: "10K+ MAU",
    text: "These guys delivered our dashboard in under 6 weeks and it handled 10,000 users without a single issue. Honestly shocked by the quality at this price point.",
  },
  {
    initials: "SN",
    name: "Sarah Nwosu",
    role: "Founder, Verdant Market",
    status: "500+ Weekly Orders",
    text: "I've worked with three dev agencies before. This is the first one that actually gave me weekly updates without me having to chase them. The app looks stunning too.",
  },
  {
    initials: "MT",
    name: "Michael Tunde",
    role: "CTO, LegalOS",
    status: "80% Time Saved",
    text: "The AI integration they built for us cut our contract review time by 80%. The team understood our requirements immediately and executed without hand-holding.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="bg-cream" style={{ padding: "7rem 5%", position: "relative" }}>
    <style>{`
      .testi-grid { display:grid; grid-template-columns:1fr; gap:1.5rem; }
      @media(min-width:768px){ .testi-grid { grid-template-columns:repeat(3,1fr); } }
      .testi-card { background:var(--paper); border:1px solid var(--line); border-radius:16px; padding:2rem; position:relative; transition:border-color 0.2s ease; }
      .testi-card:hover { border-color: var(--brand); }
    `}</style>

    <div className="section-label reveal">Client Stories</div>
    <h2
      className="font-display reveal reveal-delay-1"
      style={{
        fontWeight: 600,
        fontSize: "clamp(2rem,4vw,3rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: "var(--ink)",
        marginBottom: "1rem",
      }}
    >
      Startup Founders
      <br />
      Who Shipped
    </h2>
    <p
      className="reveal reveal-delay-2"
      style={{ color: "var(--ink-soft)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 480, marginBottom: "3rem" }}
    >
      Real traction. Real growth. Real success.
    </p>

    <div className="testi-grid">
      {testimonials.map((t, i) => (
        <div key={t.name} className={`testi-card reveal reveal-delay-${i}`}>
          {/* Big quote */}
          <div
            className="font-display"
            style={{
              position: "absolute",
              top: 12,
              right: 24,
              fontSize: "3.5rem",
              lineHeight: 1,
              color: "var(--brand-tint)",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            &rdquo;
          </div>
          {/* Stars */}
          <div style={{ color: "var(--brand)", fontSize: "0.875rem", marginBottom: "1rem", letterSpacing: "0.05em" }}>
            ★★★★★
          </div>
          {/* Status Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.3rem 0.8rem",
              background: "var(--brand-tint)",
              borderRadius: "100px",
              marginBottom: "1rem",
            }}
          >
            <span style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--brand-dark)" }}>
              {t.status}
            </span>
          </div>
          <p style={{ color: "var(--ink)", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>{t.text}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--brand)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {t.initials}
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--ink)" }}>{t.name}</div>
              <div style={{ color: "var(--ink-soft)", fontSize: "0.78rem" }}>{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
