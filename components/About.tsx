"use client";

const skills = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "React Native",
  "AWS / GCP",
  "Docker",
  "AI / LLMs",
  "Figma",
  "Flutter",
];

const About = () => (
  <section id="about" className="bg-paper" style={{ padding: "7rem 5%", position: "relative" }}>
    <style>{`
      .about-grid { display:grid; grid-template-columns:1fr; gap:4rem; align-items:center; }
      @media(min-width:1024px){ .about-grid { grid-template-columns:1fr 1fr; gap:6rem; } }
      .skill-chip { background:var(--cream); border:1px solid var(--line); border-radius:8px; padding:0.35rem 0.9rem; font-size:0.8rem; color:var(--ink-soft); transition:border-color 0.2s ease, color 0.2s ease; }
      .skill-chip:hover { border-color: var(--brand); color: var(--ink); }
    `}</style>

    <div className="about-grid">
      {/* Code card */}
      <div className="reveal" style={{ position: "relative", height: 460 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--cream)",
            border: "1px solid var(--line)",
            borderRadius: 20,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
              fontFamily: "'Courier New', monospace",
              fontSize: "0.78rem",
              lineHeight: 1.8,
              color: "var(--ink)",
              padding: "2rem",
              width: "100%",
            }}
          >
            <span style={{ color: "var(--stone)" }}>{"// Zephra — core principles"}</span>
            <br />
            <span style={{ color: "var(--brand-dark)" }}>const</span> zephra
            {" = {"}
            <br />
            {"  "}mission: <span style={{ color: "var(--brand)" }}>&quot;ship things that work&quot;</span>,
            <br />
            {"  "}values:{" ["}
            <br />
            {"    "}
            <span style={{ color: "var(--brand)" }}>&quot;clarity&quot;</span>,
            <br />
            {"    "}
            <span style={{ color: "var(--brand)" }}>&quot;speed&quot;</span>,
            <br />
            {"    "}
            <span style={{ color: "var(--brand)" }}>&quot;quality&quot;</span>,
            <br />
            {"    "}
            <span style={{ color: "var(--brand)" }}>&quot;honesty&quot;</span>
            <br />
            {"  "}
            {"],"}
            <br />
            {"  "}stack: <span style={{ color: "var(--brand)" }}>&quot;whatever the job needs&quot;</span>,
            <br />
            {"  "}deliveryMode: <span style={{ color: "var(--brand)" }}>&quot;relentless&quot;</span>,<br />
            {"  "}bullshit: <span style={{ color: "var(--brand-dark)" }}>false</span>,
            <br />
            {"};"}
            <br />
            <br />
            <span style={{ color: "var(--brand-dark)" }}>export default</span> zephra;
          </div>
        </div>

        {/* Floating badges */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: -24,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "var(--paper)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: "0.7rem 1.25rem",
            boxShadow: "0 8px 24px rgba(34,30,27,0.08)",
            fontSize: "0.82rem",
            fontWeight: 500,
            color: "var(--ink)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand)", flexShrink: 0 }} />
          Currently Accepting Projects
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: -24,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "var(--paper)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: "0.7rem 1.25rem",
            boxShadow: "0 8px 24px rgba(34,30,27,0.08)",
            fontSize: "0.82rem",
            fontWeight: 500,
            color: "var(--ink)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--stone)", flexShrink: 0 }} />
          60+ Products Shipped
        </div>
      </div>

      {/* Text */}
      <div className="reveal reveal-delay-1">
        <div className="section-label">About Us</div>
        <h2
          className="font-display"
          style={{
            fontWeight: 600,
            fontSize: "clamp(2rem,4vw,3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: "1.5rem",
          }}
        >
          We&apos;re Developers
          <br />
          Who Actually Care
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.8, fontSize: "1rem" }}>
            Zephra Studio was built out of frustration with agencies that
            overpromise, underdeliver, and disappear after the invoice. We&apos;re a
            small, sharp team of engineers and designers who care deeply about
            the products we build.
          </p>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.8, fontSize: "1rem" }}>
            We work with startups, SMEs, and growing businesses who need real
            technical partners — not order-takers. If you have a problem that
            needs a software solution, we&apos;ll help you find the right one and
            build it without wasting your time or money.
          </p>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.8, fontSize: "1rem" }}>
            Based in Nigeria. Working globally. Built on honesty, speed, and craft.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
