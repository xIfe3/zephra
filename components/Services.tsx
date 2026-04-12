"use client";

import { useState } from "react";

const primaryServices = [
  {
    icon: "🚀",
    name: "Full Stack MVP",
    desc: "Complete product from frontend to backend. Next.js, Node.js, PostgreSQL. Everything startups need to launch.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    icon: "📱",
    name: "Mobile Apps",
    desc: "iOS and Android apps that feel native and perform fast. React Native or Flutter, built for scale.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: "🤖",
    name: "AI Integration",
    desc: "Add intelligence to your product. LLM integration, automation, smart features your users will love.",
    tags: ["OpenAI", "LangChain", "RAG", "Automation"],
  },
  {
    icon: "🔍",
    name: "Product Audit",
    desc: "Analyze your current app, identify bottlenecks, and get a clear roadmap for optimization.",
    tags: ["Performance", "UX", "Code Review", "Strategy"],
  },
];

const alsoServices = [
  {
    icon: "⚙️",
    name: "Backend & APIs",
    desc: "Scalable server-side systems and infrastructure.",
    tags: ["Node.js", "NestJS", "PostgreSQL", "AWS"],
  },
  {
    icon: "🎨",
    name: "UI/UX Redesign",
    desc: "Transform confusing interfaces into beautiful experiences.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: "🛒",
    name: "E-commerce Solutions",
    desc: "Online stores built to convert and scale.",
    tags: ["Shopify", "Stripe", "Inventory", "Payments"],
  },
  {
    icon: "☁️",
    name: "DevOps & Cloud",
    desc: "CI/CD pipelines, containers, automated infrastructure.",
    tags: ["Docker", "GitHub Actions", "AWS", "Vercel"],
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="services"
      className="bg-bg2"
      style={{ padding: "7rem 5%", position: "relative" }}
    >
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .service-card {
          padding: 2.5rem;
          background: rgba(5,5,8,0.8);
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
        }
        .service-card:hover {
          background: rgba(0,229,255,0.03);
        }
        .card-shine {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,229,255,.02), transparent);
          pointer-events: none;
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
            className="font-syne reveal reveal-delay-1"
            style={{
              fontWeight: 800,
              fontSize: "clamp(2rem,4vw,3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f0f0f8",
            }}
          >
            Built for Startup
            <br />
            Founders
          </h2>
        </div>
        <p
          className="reveal reveal-delay-2"
          style={{
            color: "rgba(240,240,248,0.45)",
            fontSize: "1.05rem",
            maxWidth: 480,
            lineHeight: 1.7,
          }}
        >
          We specialize in the tech stack startups need to move fast. Everything
          else? We do it, but it's not our focus.
        </p>
      </div>

      {/* PRIMARY SERVICES */}
      <div className="services-grid">
        {primaryServices.map((s) => (
          <div key={s.name} className="service-card reveal">
            <div className="card-shine" />
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
              {s.icon}
            </div>
            <div
              className="font-syne"
              style={{
                fontWeight: 700,
                fontSize: "1.15rem",
                marginBottom: "0.75rem",
                color: "#f0f0f8",
              }}
            >
              {s.name}
            </div>
            <p
              style={{
                color: "rgba(240,240,248,0.45)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {s.desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    background: "rgba(0,229,255,0.08)",
                    border: "1px solid rgba(0,229,255,0.12)",
                    borderRadius: "100px",
                    padding: "0.25rem 0.7rem",
                    color: "rgba(0,229,255,0.6)",
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
            className="font-syne reveal"
            style={{
              fontWeight: 700,
              fontSize: "1.3rem",
              color: "#f0f0f8",
              marginBottom: "2rem",
              opacity: 0.7,
            }}
          >
            We Also Do
          </h3>
          <div className="services-grid">
            {alsoServices.map((s) => (
              <div key={s.name} className="service-card reveal">
                <div className="card-shine" />
                <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>
                  {s.icon}
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
                  {s.name}
                </div>
                <p
                  style={{
                    color: "rgba(240,240,248,0.45)",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                  }}
                >
                  {s.desc}
                </p>
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
