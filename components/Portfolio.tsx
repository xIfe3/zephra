"use client";

const projects = [
  {
    label: "Bill Payment Platform",
    title: "PayZeph",
    impact: "Shipped in 14 Days",
    tech: ["Next.js", "NestJS", "TypeScript", "Turborepo", "Docker"],
    description:
      "A fullstack monorepo bill payment app with shared UI components, automated testing with Jest & Playwright, and Docker-based deployment.",
    image: "/projects/payzeph.png",
    live: "https://payzeph-zephra.vercel.app/",
    github: "https://github.com/zephradev/payzeph",
  },
  {
    label: "Healthcare Booking",
    title: "MediBook",
    impact: "2x Faster Than Industry Average",
    tech: ["Next.js 14", "NestJS", "Prisma", "PostgreSQL", "Tailwind"],
    description:
      "A doctor appointment platform with specialty search, real-time slot availability, JWT auth, and separate dashboards for patients and doctors.",
    image: "/projects/medibook.png",
    live: "https://medibook-zephra.vercel.app/",
    github: "https://github.com/zephradev/medibook",
  },
  {
    label: "SaaS Analytics Dashboard",
    title: "FlowAnalytics",
    impact: "Ready for Production in 2 Weeks",
    tech: ["Next.js 16", "Prisma", "Stripe", "Recharts", "NextAuth"],
    description:
      "A production-ready SaaS dashboard with tiered subscriptions, revenue analytics, CSV exports, Stripe billing, and Google OAuth.",
    image: "/projects/flowanalytics.png",
    live: "https://flowanalytics-zephra.vercel.app/",
    github: "https://github.com/zephradev/flowanalytics",
  },
  {
    label: "Personal Finance Tracker",
    title: "Savvio",
    impact: "Built Without Scope Creep",
    tech: ["Next.js 15", "NestJS", "Prisma", "PostgreSQL", "Recharts", "JWT"],
    description:
      "A budget management app with expense tracking, income monitoring, savings goals, recurring payments, budget alerts, and interactive analytics charts.",
    image: "/projects/savvio.png",
    live: "https://savvio-budgetting.vercel.app/",
    github: "https://github.com/xIfe3/savvio",
  },
  {
    label: "Property Rental Platform",
    title: "Letsten",
    impact: "Full Stack in Record Time",
    tech: ["Flutter", "React", "Flask", "PostgreSQL", "Stripe", "SocketIO", "Google Maps"],
    description:
      "A full-stack rental platform for the Nigerian housing market connecting tenants with landlords. Features property verification, tenant screening, lease management, in-app payments, real-time messaging, and location-based search.",
    image: "/projects/letsten.png",
    live: "",
    github: "",
  },
];

const Portfolio = () => (
  <section id="work" className="bg-paper" style={{ padding: "7rem 5%", position: "relative" }}>
    <style>{`
      .projects-list { display:flex; flex-direction:column; gap:2.5rem; }
      .project-card {
        display:grid; grid-template-columns:1fr; gap:0;
        border-radius:16px; overflow:hidden;
        border:1px solid var(--line);
        background:var(--paper);
        transition: border-color 0.2s ease;
      }
      .project-card:hover { border-color: var(--brand); }
      @media(min-width:768px){
        .project-card { grid-template-columns:1fr 1fr; }
        .project-card:nth-child(even) .project-img { order:2; }
        .project-card:nth-child(even) .project-info { order:1; }
      }
      .project-img {
        position:relative; width:100%; aspect-ratio:16/10; overflow:hidden; background:var(--cream);
      }
      .project-img img { width:100%; height:100%; object-fit:cover; object-position:top center; }
      .project-info { padding:2rem; display:flex; flex-direction:column; justify-content:center; }
      @media(min-width:768px){ .project-info { padding:2.5rem; } }
      .project-link {
        display:inline-flex; align-items:center; gap:0.5rem;
        padding:0.55rem 1.2rem; border-radius:6px; font-size:0.82rem; font-weight:600;
        text-decoration:none; transition: background-color 0.2s ease, border-color 0.2s ease;
      }
      .project-link-live { background: var(--brand); color: #fff; }
      .project-link-live:hover { background: var(--brand-dark); }
      .project-link-github {
        background: transparent; color: var(--ink);
        border: 1px solid var(--line);
      }
      .project-link-github:hover { border-color: var(--ink); }
      .tech-tag {
        display:inline-block; padding:0.25rem 0.65rem; border-radius:100px;
        font-size:0.72rem; font-weight:500; letter-spacing:0.02em;
        background: var(--cream); color: var(--ink-soft);
        border: 1px solid var(--line);
      }
    `}</style>

    <div className="section-label reveal">Featured Work</div>
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
      Things We&apos;ve Built
      <br />
      That Actually Work
    </h2>
    <p
      className="reveal reveal-delay-2"
      style={{ color: "var(--ink-soft)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 520, marginBottom: "3rem" }}
    >
      Real projects. Real clients. Real results.
    </p>

    <div className="projects-list">
      {projects.map((p, i) => (
        <div key={p.title} className={`project-card reveal reveal-delay-${Math.min(i, 3)}`}>
          {/* Image */}
          <div className="project-img">
            <img src={p.image} alt={`${p.title} — ${p.label}`} />
          </div>

          {/* Info */}
          <div className="project-info">
            <div
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--brand)",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              {p.label}
            </div>

            {/* Impact Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.4rem 0.9rem",
                background: "var(--brand-tint)",
                borderRadius: "100px",
                width: "fit-content",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--brand-dark)",
                }}
              >
                {p.impact}
              </span>
            </div>

            <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.5rem", color: "var(--ink)", marginBottom: "0.75rem" }}>
              {p.title}
            </h3>

            <p style={{ color: "var(--ink-soft)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              {p.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link project-link-live">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  Live Demo
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link project-link-github">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="reveal reveal-delay-3" style={{ textAlign: "center", marginTop: "3rem" }}>
      <a
        href="#contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.85rem 2rem",
          borderRadius: 6,
          border: "1px solid var(--line)",
          color: "var(--ink)",
          fontSize: "0.9rem",
          fontWeight: 600,
          textDecoration: "none",
          letterSpacing: "0.02em",
          transition: "border-color 0.2s ease",
        }}
      >
        Have a project in mind? <span>→</span>
      </a>
    </div>
  </section>
);

export default Portfolio;
