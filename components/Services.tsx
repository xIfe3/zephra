"use client";

import { useState } from "react";
import {
  Rocket,
  Smartphone,
  Sparkles,
  SearchCheck,
  Server,
  Palette,
  ShoppingCart,
  Cloud,
} from "lucide-react";

const primaryServices = [
  {
    Icon: Rocket,
    name: "Full Stack MVP",
    desc: "Complete product from frontend to backend. Next.js, Node.js, PostgreSQL. Everything startups need to launch.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    Icon: Smartphone,
    name: "Mobile Apps",
    desc: "iOS and Android apps that feel native and perform fast. React Native or Flutter, built for scale.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    Icon: Sparkles,
    name: "AI Integration",
    desc: "Add intelligence to your product. LLM integration, automation, smart features your users will love.",
    tags: ["OpenAI", "LangChain", "RAG", "Automation"],
  },
  {
    Icon: SearchCheck,
    name: "Product Audit",
    desc: "Analyze your current app, identify bottlenecks, and get a clear roadmap for optimization.",
    tags: ["Performance", "UX", "Code Review", "Strategy"],
  },
];

const alsoServices = [
  {
    Icon: Server,
    name: "Backend & APIs",
    desc: "Scalable server-side systems and infrastructure.",
    tags: ["Node.js", "NestJS", "PostgreSQL", "AWS"],
  },
  {
    Icon: Palette,
    name: "UI/UX Redesign",
    desc: "Transform confusing interfaces into beautiful experiences.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    Icon: ShoppingCart,
    name: "E-commerce Solutions",
    desc: "Online stores built to convert and scale.",
    tags: ["Shopify", "Stripe", "Inventory", "Payments"],
  },
  {
    Icon: Cloud,
    name: "DevOps & Cloud",
    desc: "CI/CD pipelines, containers, automated infrastructure.",
    tags: ["Docker", "GitHub Actions", "AWS", "Vercel"],
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className="bg-cream" style={{ padding: "7rem 5%", position: "relative" }}>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .service-card {
          padding: 2.25rem;
          background: var(--paper);
          position: relative;
        }
        .service-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: var(--brand-tint);
          display: flex; align-items: center; justify-content: center;
          color: var(--brand-dark);
          margin-bottom: 1.1rem;
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "2rem",
          marginBottom: "4rem",
        }}
      >
        <div>
          <div className="section-label reveal">What We Do</div>
          <h2
            className="font-display reveal reveal-delay-1"
            style={{
              fontWeight: 600,
              fontSize: "clamp(2rem,4vw,3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
            }}
          >
            Built for Startup
            <br />
            Founders
          </h2>
        </div>
        <p
          className="reveal reveal-delay-2"
          style={{ color: "var(--ink-soft)", fontSize: "1.05rem", maxWidth: 480, lineHeight: 1.7 }}
        >
          We specialize in the tech stack startups need to move fast. Everything
          else? We do it, but it&apos;s not our focus.
        </p>
      </div>

      {/* PRIMARY SERVICES */}
      <div className="services-grid">
        {primaryServices.map((s) => (
          <div key={s.name} className="service-card reveal">
            <div className="service-icon">
              <s.Icon size={22} strokeWidth={1.75} />
            </div>
            <div
              className="font-display"
              style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--ink)" }}
            >
              {s.name}
            </div>
            <p style={{ color: "var(--ink-soft)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              {s.desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    background: "var(--cream)",
                    border: "1px solid var(--line)",
                    borderRadius: "100px",
                    padding: "0.25rem 0.7rem",
                    color: "var(--ink-soft)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ALSO DO SECTION - COLLAPSIBLE */}
      {showAll && (
        <div style={{ marginTop: "3rem" }}>
          <h3
            className="font-display reveal"
            style={{ fontWeight: 600, fontSize: "1.3rem", color: "var(--ink)", marginBottom: "2rem" }}
          >
            We Also Do
          </h3>
          <div className="services-grid">
            {alsoServices.map((s) => (
              <div key={s.name} className="service-card reveal">
                <div className="service-icon" style={{ width: 38, height: 38 }}>
                  <s.Icon size={18} strokeWidth={1.75} />
                </div>
                <div
                  className="font-display"
                  style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: "var(--ink)" }}
                >
                  {s.name}
                </div>
                <p style={{ color: "var(--ink-soft)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn-ghost"
          style={{ fontSize: "0.95rem", padding: "0.75rem 1.8rem" }}
        >
          {showAll ? "Show Less" : "See All Capabilities"}
        </button>
      </div>
    </section>
  );
};

export default Services;
