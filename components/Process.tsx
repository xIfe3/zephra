"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Scope",
    text: "We nail down exactly what your MVP is. Goals, features, constraints, timeline. You get a 1-page scope document and fixed price.",
    deliverables: ["1-page scope document", "Fixed price quote", "Clear 14-day timeline"],
  },
  {
    num: "02",
    title: "Design & Architecture",
    text: "Wireframes, component systems, and infrastructure planning. You see exactly what you're getting before we build it.",
    deliverables: ["Wireframes & user flows", "Database & API architecture", "Tech stack signed off"],
  },
  {
    num: "03",
    title: "Build in Sprints",
    text: "Agile development with weekly updates. You see the product take shape in real-time. We test thoroughly and iterate fast.",
    deliverables: ["Working build every week", "Direct Slack access", "QA tested each sprint"],
  },
  {
    num: "04",
    title: "Launch & Scale",
    text: "Go live. Measure what works. We support you as you iterate based on real user feedback and market needs.",
    deliverables: ["Production deployment", "Analytics & monitoring wired up", "Post-launch support window"],
  },
];

const Deliverables = ({ items }: { items: string[] }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
    {items.map((d) => (
      <div key={d} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "var(--brand)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Check size={14} strokeWidth={2.5} />
        </span>
        <span style={{ color: "var(--ink)", fontSize: "0.92rem", fontWeight: 500 }}>{d}</span>
      </div>
    ))}
  </div>
);

const Process = () => {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section id="process" className="bg-paper" style={{ padding: "7rem 5%", position: "relative" }}>
      <style>{`
        .process-grid { display:grid; grid-template-columns:1fr; gap:3rem; align-items:start; }
        @media(min-width:1024px){ .process-grid { grid-template-columns:1fr 1fr; gap:6rem; align-items:center; } }
        .process-step { cursor:pointer; transition: background-color 0.2s ease; border-radius: 12px; }
        .process-step .step-num { color: var(--stone); transition: color 0.2s ease; }
        .process-step.active .step-num { color: var(--brand); }
        .process-step.active .step-title { color: var(--brand); }
        .process-panel {
          width: 100%;
          border-radius: 20px;
          border: 1px solid var(--line);
          background: var(--cream);
          padding: 2.5rem;
        }
        .process-accordion {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease;
        }
        .process-accordion.open { grid-template-rows: 1fr; }
        .process-accordion-inner { overflow: hidden; min-height: 0; }
        .process-panel-mobile {
          border-radius: 0;
          border: none;
          background: transparent;
          padding: 1.1rem 0.75rem;
          margin: 0;
        }
        .process-panel-mobile-label {
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--stone);
          margin-bottom: 0.85rem;
        }
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
            4 clear phases. Weekly updates. No scope creep. Real products. Tap a
            phase to see what you get.
          </p>
          <div className="reveal reveal-delay-3">
            {steps.map((step, i) => (
              <div key={step.num}>
                <div
                  key="header"
                  onClick={() => setActive(i)}
                  className={`process-step ${i === active ? "active" : ""}`}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    padding: "1.75rem 0.75rem",
                    background: i === active ? "var(--brand-tint)" : "transparent",
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
                      className="step-title font-display"
                      style={{ fontWeight: 600, fontSize: "1.05rem", color: "var(--ink)", marginBottom: "0.4rem", transition: "color 0.2s ease" }}
                    >
                      {step.title}
                    </div>
                    <p style={{ color: "var(--ink-soft)", fontSize: "0.875rem", lineHeight: 1.7 }}>{step.text}</p>
                  </div>
                </div>

                {/* Mobile / tablet — deliverables expand right under the tapped step.
                    Responsive visibility lives on this plain wrapper; the grid-animation
                    class goes on the child so "lg:hidden" never has to fight a custom
                    `display` rule for control of the same element. */}
                <div key="accordion" className="lg:hidden">
                  <div className={`process-accordion ${i === active ? "open" : ""}`}>
                    <div className="process-accordion-inner">
                      <div className="process-panel-mobile">
                        <div className="process-panel-mobile-label">What You Get</div>
                        <Deliverables items={step.deliverables} />
                      </div>
                    </div>
                  </div>
                </div>

                <div key="divider" style={{ borderBottom: i < steps.length - 1 ? "1px solid var(--line)" : "none" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop — persistent side panel */}
        <div className="reveal hidden lg:flex" style={{ justifyContent: "center" }}>
          <div className="process-panel">
            <div className="section-label" style={{ marginBottom: "0.5rem" }}>
              Phase {current.num}
            </div>
            <h3
              className="font-display"
              style={{ fontWeight: 600, fontSize: "1.6rem", color: "var(--ink)", marginBottom: "0.75rem" }}
            >
              {current.title}
            </h3>
            <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.75rem" }}>
              {current.text}
            </p>
            <Deliverables items={current.deliverables} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
