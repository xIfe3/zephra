"use client";

const steps = [
  {
    num: "01",
    title: "Discovery & Scope",
    text: "We nail down exactly what your MVP is. Goals, features, constraints, timeline. You get a 1-page scope document and fixed price.",
  },
  {
    num: "02",
    title: "Design & Architecture",
    text: "Wireframes, component systems, and infrastructure planning. You see exactly what you're getting before we build it.",
  },
  {
    num: "03",
    title: "Build in Sprints",
    text: "Agile development with weekly updates. You see the product take shape in real-time. We test thoroughly and iterate fast.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    text: "Go live. Measure what works. We support you as you iterate based on real user feedback and market needs.",
  },
];

const Process = () => (
  <section id="process" className="bg-paper" style={{ padding: "7rem 5%", position: "relative" }}>
    <style>{`
      .process-grid { display:grid; grid-template-columns:1fr; gap:4rem; align-items:center; }
      @media(min-width:1024px){ .process-grid { grid-template-columns:1fr 1fr; gap:6rem; } }
      .process-visual { display:none; }
      @media(min-width:1024px){ .process-visual { display:flex; align-items:center; justify-content:center; } }
      .process-step .step-num { color: var(--stone); transition: color 0.2s ease; }
      .process-step:hover .step-num { color: var(--brand); }
    `}</style>
    <div className="process-grid">
      {/* Steps column */}
      <div>
        <div className="section-label reveal">How It Works</div>
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
          MVP to Launch
          <br />
          in 14 Days
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{ color: "var(--ink-soft)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 480, marginBottom: "2.5rem" }}
        >
          4 clear phases. Weekly updates. No scope creep. Real products. Most
          MVPs: 2 weeks, 4 sprints, ready to launch.
        </p>
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`process-step reveal reveal-delay-${i}`}
            style={{
              display: "flex",
              gap: "1.5rem",
              padding: "1.75rem 0",
              borderBottom: i < steps.length - 1 ? "1px solid var(--line)" : "none",
            }}
          >
            <div
              className="step-num font-display"
              style={{ fontWeight: 600, fontSize: "2.25rem", minWidth: 56, lineHeight: 1 }}
            >
              {step.num}
            </div>
            <div>
              <div
                className="font-display"
                style={{ fontWeight: 600, fontSize: "1.05rem", color: "var(--ink)", marginBottom: "0.4rem" }}
              >
                {step.title}
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.875rem", lineHeight: 1.7 }}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Visual */}
      <div className="process-visual reveal">
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: 20,
            border: "1px solid var(--line)",
            background: "var(--cream)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <div
            className="font-display"
            style={{ fontWeight: 600, fontSize: "5.5rem", lineHeight: 1, color: "var(--brand)" }}
          >
            14
          </div>
          <div
            style={{
              fontSize: "0.85rem",
              color: "var(--ink-soft)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginTop: "1rem",
            }}
          >
            Days from Kickoff
            <br />
            to Launch
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Process;
