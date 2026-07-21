"use client";

import Link from "next/link";
import { projects } from "@/data/projects";

type ProjectsShowcaseProps = {
  limit?: number;
  title?: string;
  intro?: string;
  showCta?: boolean;
};

const ProjectsShowcase = ({
  limit = 3,
  title = "Things We’ve Built That Actually Work",
  intro = "Real projects. Real clients. Real results.",
  showCta = true,
}: ProjectsShowcaseProps) => {
  const visibleProjects = projects.slice(0, limit);

  return (
    <section
      id="work"
      className="bg-paper"
      style={{ padding: "7rem 5%", position: "relative" }}
    >
      <style>{`
        .projects-list { display:flex; flex-direction:column; gap:2.5rem; }
        .project-card {
          display:grid; grid-template-columns:1fr; gap:0;
          border-radius:24px; overflow:hidden;
          border:1px solid var(--line);
          background:linear-gradient(135deg, #fff 0%, #fcf7f1 100%);
          box-shadow:0 16px 48px rgba(34,30,27,0.05);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .project-card:hover {
          border-color: var(--brand);
          transform: translateY(-3px);
          box-shadow:0 24px 56px rgba(34,30,27,0.08);
        }
        @media(min-width:768px){
          .project-card { grid-template-columns:1.03fr 0.97fr; }
          .project-card:nth-child(even) .project-img { order:2; }
          .project-card:nth-child(even) .project-info { order:1; }
        }
        .project-img {
          position:relative; width:100%; aspect-ratio:16/10; overflow:hidden; background:var(--cream);
        }
        .project-img img { width:100%; height:100%; object-fit:cover; object-position:top center; transition: transform 0.35s ease; }
        .project-card:hover .project-img img { transform:scale(1.03); }
        .project-info { padding:2rem; display:flex; flex-direction:column; justify-content:center; }
        @media(min-width:768px){ .project-info { padding:2.5rem; } }
        .project-link {
          display:inline-flex; align-items:center; justify-content:center;
          gap:0.5rem; min-height:44px; padding:0.7rem 1.2rem; border-radius:999px; font-size:0.82rem; font-weight:600;
          text-decoration:none; transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .project-link:hover { transform:translateY(-1px); }
        .project-link-live { background: var(--brand); color: #fff; }
        .project-link-live:hover { background: var(--brand-dark); }
        .project-link-github {
          background: transparent; color: var(--ink);
          border: 1px solid var(--line);
        }
        .project-link-github:hover { border-color: var(--ink); background:#fff; }
        .tech-tag {
          display:inline-block; padding:0.3rem 0.7rem; border-radius:100px;
          font-size:0.72rem; font-weight:500; letter-spacing:0.02em;
          background: rgba(138,78,41,0.08); color: var(--ink-soft);
          border: 1px solid rgba(138,78,41,0.12);
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
        {title}
      </h2>
      <p
        className="reveal reveal-delay-2"
        style={{
          color: "var(--ink-soft)",
          fontSize: "1.05rem",
          lineHeight: 1.8,
          maxWidth: 620,
          marginBottom: "3rem",
        }}
      >
        {intro}
      </p>

      <div className="projects-list">
        {visibleProjects.map((project, index) => (
          <div
            key={project.title}
            className={`project-card reveal reveal-delay-${Math.min(index, 3)}`}
          >
            <div className="project-img">
              <img
                src={project.image}
                alt={`${project.title} — ${project.label}`}
              />
            </div>

            <div className="project-info">
              <div
                style={{
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--brand)",
                  fontWeight: 700,
                  marginBottom: "0.6rem",
                }}
              >
                {project.label}
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.4rem 0.9rem",
                  background: "rgba(138,78,41,0.1)",
                  borderRadius: "100px",
                  width: "fit-content",
                  marginBottom: "0.95rem",
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
                  {project.impact}
                </span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontWeight: 600,
                  fontSize: "1.55rem",
                  color: "var(--ink)",
                  marginBottom: "0.8rem",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "var(--ink-soft)",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1.5rem",
                }}
              >
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div
                style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-link project-link-live"
                >
                  View Project
                </Link>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-github"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCta && (
        <div
          className="reveal reveal-delay-3"
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 1.8rem",
              borderRadius: 999,
              border: "1px solid var(--line)",
              color: "var(--ink)",
              fontSize: "0.92rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "border-color 0.2s ease, background-color 0.2s ease",
            }}
          >
            View all projects <span>→</span>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProjectsShowcase;
