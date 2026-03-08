"use client";

const stats = [
  { value: "60+",  label: "Products Shipped",      sub: "across 12 industries" },
  { value: "4.9",  label: "Client Satisfaction",   sub: "avg. rating out of 5" },
  { value: "100%", label: "On-Time Delivery",       sub: "no missed deadlines" },
  { value: "3yrs", label: "In the Industry",        sub: "built on real experience" },
];

const logos = [
  "Fintech", "HealthTech", "SaaS", "E-Commerce", "EdTech",
  "Logistics", "Real Estate", "NGO", "Media", "Retail",
];

const Trust = () => (
  <section id="trust-band" className="bg-bg2" style={{ padding: "7rem 5%", position: "relative", overflow: "hidden" }}>
    <style>{`
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 24px;
        overflow: hidden;
        margin-bottom: 5rem;
      }
      @media(min-width: 768px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
      .stat-cell {
        padding: 2.5rem 2rem;
        background: rgba(5,5,8,0.6);
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        transition: background 0.3s;
      }
      .stat-cell:hover { background: rgba(0,229,255,0.03); }
      .marquee-track {
        display: flex;
        gap: 0;
        width: max-content;
        animation: marquee 22s linear infinite;
      }
      .marquee-track:hover { animation-play-state: paused; }
      @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      .industry-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.5rem 1.4rem;
        border-right: 1px solid rgba(255,255,255,0.08);
        white-space: nowrap;
        font-size: 0.82rem;
        font-weight: 500;
        color: rgba(240,240,248,0.35);
        letter-spacing: 0.04em;
        text-transform: uppercase;
        transition: color 0.3s;
        cursor: default;
      }
      .industry-chip:hover { color: #f0f0f8; }
      .industry-chip::before {
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #00e5ff;
        opacity: 0.6;
        flex-shrink: 0;
      }
    `}</style>

    {/* Section header */}
    <div className="section-label reveal">By the Numbers</div>
    <h2
      className="font-syne reveal reveal-delay-1"
      style={{
        fontWeight: 800,
        fontSize: "clamp(2rem,4vw,3.2rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.03em",
        color: "#f0f0f8",
        marginBottom: "0.75rem",
      }}
    >
      Results That<br />Speak for Themselves
    </h2>
    <p
      className="reveal reveal-delay-2"
      style={{
        color: "rgba(240,240,248,0.45)",
        fontSize: "1.05rem",
        lineHeight: 1.7,
        maxWidth: 480,
        marginBottom: "3.5rem",
      }}
    >
      We let the work talk. Every number here is earned, not estimated.
    </p>

    {/* Stats grid */}
    <div className="stats-grid reveal reveal-delay-1">
      {stats.map((s) => (
        <div key={s.label} className="stat-cell">
          <span
            className="font-syne"
            style={{
              fontSize: "clamp(2.4rem,5vw,3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#00e5ff",
              lineHeight: 1,
            }}
          >
            {s.value}
          </span>
          <span
            className="font-syne"
            style={{ fontSize: "1rem", fontWeight: 700, color: "#f0f0f8", marginTop: "0.5rem" }}
          >
            {s.label}
          </span>
          <span style={{ fontSize: "0.78rem", color: "rgba(240,240,248,0.35)", lineHeight: 1.5 }}>
            {s.sub}
          </span>
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
        color: "rgba(240,240,248,0.25)",
        marginBottom: "1.25rem",
        fontWeight: 500,
      }}
    >
      Industries We've Worked In
    </p>

    {/* Marquee strip */}
    <div
      className="reveal"
      style={{
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        background: "rgba(255,255,255,0.02)",
        padding: "0.1rem 0",
      }}
    >
      <div className="marquee-track">
        {[...logos, ...logos].map((name, i) => (
          <span key={i} className="industry-chip">{name}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Trust;
