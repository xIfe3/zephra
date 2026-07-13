const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-paper"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "140px 5% 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 860,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--brand-tint)",
            border: "1px solid var(--line)",
            borderRadius: "100px",
            padding: "5px 14px",
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "var(--brand-dark)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: "1.75rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--brand)",
              display: "inline-block",
            }}
          />
          Available for Projects in 2026
        </div>

        {/* Headline */}
        <h1
          className="font-display"
          style={{
            fontWeight: 600,
            fontSize: "clamp(2.6rem, 6vw, 5.4rem)",
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: "1.5rem",
          }}
        >
          Build Your MVP in 14 Days.
          <br />
          <span style={{ fontStyle: "italic", color: "var(--brand)" }}>
            Launch This Month.
          </span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
            color: "var(--ink-soft)",
            maxWidth: 540,
            marginBottom: "2.5rem",
            lineHeight: 1.75,
          }}
        >
          Your startup idea deserves founders + builders who ship fast. We turn
          concepts into live products that attract users and investors.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <a href="#contact" className="btn-primary">
            Book Free Scope Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#work" className="btn-ghost">
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid var(--line)",
          }}
        >
          {[
            { num: "60", suffix: "+", label: "Projects Shipped" },
            { num: "4.9", suffix: "★", label: "Client Rating" },
            { num: "4", suffix: "yr+", label: "In the Industry" },
            { num: "100", suffix: "%", label: "On-time Delivery" },
          ].map(({ num, suffix, label }) => (
            <div key={label}>
              <div
                className="font-display"
                style={{ fontWeight: 600, fontSize: "2.1rem", lineHeight: 1, color: "var(--ink)" }}
              >
                {num}
                <span style={{ color: "var(--brand)" }}>{suffix}</span>
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--ink-soft)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginTop: "0.4rem",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
