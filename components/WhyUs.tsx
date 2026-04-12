"use client";

const items = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    text: "We ship MVPs in weeks, not months. Tight timelines are our default mode, not our exception.",
  },
  {
    icon: "🚀",
    title: "Built by Founders",
    text: "We've launched startups too. We understand your pressure, your constraints, and what actually matters.",
  },
  {
    icon: "🎯",
    title: "No Scope Creep",
    text: "Fixed timeline, clear deliverables, zero surprises. You know exactly what you're paying for and when it ships.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    text: "No hidden fees. No surprise invoices. We give you a fixed quote and stick to it.",
  },
  {
    icon: "🔊",
    title: "Weekly Updates",
    text: "You're never in the dark. Weekly check-ins, Slack access, working product every sprint.",
  },
  {
    icon: "🏗️",
    title: "Production-Grade Code",
    text: "Clean, scalable code built to grow with your startup. Not oversheltered, not overengineered.",
  },
];

const WhyUs = () => (
  <section
    id="trust"
    className="bg-bg"
    style={{ padding: "7rem 5%", position: "relative" }}
  >
    <style>{`
      .why-grid { display:grid; grid-template-columns:1fr; gap:1rem; }
      @media(min-width:640px)  { .why-grid { grid-template-columns:repeat(2,1fr); } }
      @media(min-width:1024px) { .why-grid { grid-template-columns:repeat(3,1fr); } }
      .trust-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:2rem; transition:border-color 0.3s, background 0.3s; }
      .trust-card:hover { border-color:rgba(0,229,255,.25); background:rgba(0,229,255,.02); }
    `}</style>

    <div className="section-label reveal">Why Choose Us</div>
    <h2
      className="font-syne reveal reveal-delay-1"
      style={{
        fontWeight: 800,
        fontSize: "clamp(2rem,4vw,3.2rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.03em",
        color: "#f0f0f8",
        marginBottom: "4rem",
      }}
    >
      Built Different.
      <br />
      Delivered Better.
    </h2>

    <div className="why-grid">
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`trust-card reveal reveal-delay-${i % 4}`}
        >
          <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
            {item.icon}
          </div>
          <div
            className="font-syne"
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              marginBottom: "0.5rem",
              color: "#f0f0f8",
            }}
          >
            {item.title}
          </div>
          <p
            style={{
              color: "rgba(240,240,248,0.45)",
              fontSize: "0.875rem",
              lineHeight: 1.65,
            }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyUs;
