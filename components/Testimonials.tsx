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
  <section
    id="testimonials"
    className="bg-bg2"
    style={{ padding: "7rem 5%", position: "relative" }}
  >
    <style>{`
      .testi-grid { display:grid; grid-template-columns:1fr; gap:1.5rem; }
      @media(min-width:768px){ .testi-grid { grid-template-columns:repeat(3,1fr); } }
      .testi-card { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:2rem; position:relative; overflow:hidden; transition:border-color 0.3s; }
      .testi-card:hover { border-color:rgba(0,229,255,.2); }
    `}</style>

    <div className="section-label reveal">Client Stories</div>
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
      Startup Founders
      <br />
      Who Shipped
    </h2>
    <p
      className="reveal reveal-delay-2"
      style={{
        color: "rgba(240,240,248,0.45)",
        fontSize: "1.05rem",
        lineHeight: 1.7,
        maxWidth: 480,
        marginBottom: "3rem",
      }}
    >
      Real traction. Real growth. Real success.
    </p>

    <div className="testi-grid">
      {testimonials.map((t, i) => (
        <div key={t.name} className={`testi-card reveal reveal-delay-${i}`}>
          {/* Big quote */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 20,
              fontFamily: "Georgia, serif",
              fontSize: "3.5rem",
              lineHeight: 1,
              color: "#00e5ff",
              opacity: 0.18,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            "
          </div>
          {/* Stars */}
          <div
            style={{
              color: "#00e5ff",
              fontSize: "0.875rem",
              marginBottom: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            ★★★★★
          </div>
          {/* Status Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.3rem 0.8rem",
              background: "rgba(0,229,255,0.1)",
              border: "1px solid rgba(0,229,255,0.2)",
              borderRadius: "50px",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#00e5ff",
              }}
            >
              {t.status}
            </span>
          </div>
          <p
            style={{
              color: "rgba(240,240,248,0.8)",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            {t.text}
          </p>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00e5ff, #00c8ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#020906",
                flexShrink: 0,
              }}
            >
              {t.initials}
            </div>
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#f0f0f8",
                }}
              >
                {t.name}
              </div>
              <div
                style={{ color: "rgba(240,240,248,0.45)", fontSize: "0.78rem" }}
              >
                {t.role}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
