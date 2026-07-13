"use client";

const stats = [
  { value: "60+", label: "Products Shipped", sub: "across startups & enterprises" },
  { value: "23", label: "MVPs in 14 Days", sub: "startup launches this year" },
  { value: "100%", label: "On-Time Delivery", sub: "no missed deadlines" },
  { value: "4.9★", label: "Client Satisfaction", sub: "avg. rating verified" },
];

const logos = ["Fintech Startups", "HealthTech", "SaaS", "EdTech", "E-Commerce", "AI/Automation", "Logistics", "Media"];

const Trust = () => (
  <section id="trust-band" className="bg-cream" style={{ padding: "7rem 5%", position: "relative", overflow: "hidden" }}>
    <style>{`
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1px;
        background: var(--line);
        border: 1px solid var(--line);
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 5rem;
      }
      @media(min-width: 768px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
      .stat-cell {
        padding: 2.5rem 2rem;
        background: var(--paper);
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }
      .marquee-track {
        display: flex;
        gap: 0;
        width: max-content;
        animation: marquee 34s linear infinite;
      }
      .marquee-track:hover { animation-play-state: paused; }
      .industry-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.5rem 1.4rem;
        border-right: 1px solid var(--line);
        white-space: nowrap;
        font-size: 0.82rem;
        font-weight: 500;
        color: var(--ink-soft);
        letter-spacing: 0.02em;
      }
    `}</style>

    {/* Section header */}
    <div className="section-label reveal">Why Founders Choose Us</div>
    <h2
      className="font-display reveal reveal-delay-1"
      style={{
        fontWeight: 600,
        fontSize: "clamp(2rem,4vw,3rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: "var(--ink)",
        marginBottom: "0.75rem",
      }}
    >
      Built by Founders.
      <br />
      For Founders.
    </h2>
    <p
      className="reveal reveal-delay-2"
      style={{ color: "var(--ink-soft)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 480, marginBottom: "3.5rem" }}
    >
      Real metrics. Real startups. Real results.
    </p>

    {/* Stats grid */}
    <div className="stats-grid reveal reveal-delay-1">
      {stats.map((s) => (
        <div key={s.label} className="stat-cell">
          <span
            className="font-display"
            style={{ fontSize: "clamp(2.2rem,5vw,3.2rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--brand)", lineHeight: 1 }}
          >
            {s.value}
          </span>
          <span className="font-display" style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginTop: "0.5rem" }}>
            {s.label}
          </span>
          <span style={{ fontSize: "0.78rem", color: "var(--ink-soft)", lineHeight: 1.5 }}>{s.sub}</span>
        </div>
      ))}
    </div>

    {/* Divider label */}
    <p
      className="reveal"
      style={{
        fontSize: "0.72rem",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "var(--stone)",
        marginBottom: "1.25rem",
        fontWeight: 500,
      }}
    >
      Industries We&apos;ve Worked In
    </p>

    {/* Marquee strip */}
    <div className="reveal" style={{ overflow: "hidden", border: "1px solid var(--line)", borderRadius: 12, background: "var(--paper)" }}>
      <div className="marquee-track">
        {[...logos, ...logos].map((name, i) => (
          <span key={i} className="industry-chip">
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Trust;
