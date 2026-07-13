"use client";

const OfferSection = () => {
  const steps = [
    {
      num: "01",
      title: "Free MVP Scope Call",
      desc: "1-hour discovery with no commitment. We dig into your idea, define the product, and understand your constraints.",
    },
    {
      num: "02",
      title: "Fixed Scope & Price Quote",
      desc: "You get a clear 1-page document: exactly what you're building, timeline, price, and tech stack. No surprises.",
    },
    {
      num: "03",
      title: "Build in 14 Days",
      desc: "Weekly updates, agile sprints, working product. You're never in the dark. Launch-ready in 2 weeks.",
    },
  ];

  return (
    <section
      id="offer"
      className="bg-paper"
      style={{
        padding: "6rem 5%",
        position: "relative",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <style>{`
        .offer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .offer-card {
          padding: 2.5rem;
          border-radius: 12px;
          background: var(--cream);
          border: 1px solid var(--line-soft);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: border-color 0.2s ease;
        }
        .offer-card:hover { border-color: var(--brand); }
        .offer-num {
          font-size: 1.9rem;
          font-weight: 600;
          color: var(--brand);
          font-family: 'Fraunces', serif;
        }
        .offer-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--ink);
          font-family: 'Fraunces', serif;
        }
        .offer-desc {
          font-size: 0.95rem;
          color: var(--ink-soft);
          line-height: 1.7;
        }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="section-label reveal" style={{ justifyContent: "center" }}>
          How Most Startups Get Started With Us
        </div>
      </div>

      <div className="offer-grid">
        {steps.map((step) => (
          <div key={step.num} className="offer-card reveal">
            <div className="offer-num">{step.num}</div>
            <h3 className="offer-title">{step.title}</h3>
            <p className="offer-desc">{step.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
        <a
          href="#contact"
          className="btn-primary"
          style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}
        >
          Book Your Free Scope Call
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default OfferSection;
