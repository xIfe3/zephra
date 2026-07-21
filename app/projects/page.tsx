import Link from "next/link";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <main className="bg-paper" style={{ minHeight: "100vh" }}>
      <section style={{ padding: "7rem 5% 5rem" }}>
        <div className="section-label">Selected Work</div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            maxWidth: 780,
            marginBottom: "1rem",
          }}
        >
          Case studies shaped around real product problems.
        </h1>
        <p
          style={{
            color: "var(--ink-soft)",
            fontSize: "1.04rem",
            lineHeight: 1.85,
            maxWidth: 730,
            marginBottom: "3rem",
          }}
        >
          Each story below shows the thinking behind the build, the product
          decisions that mattered, and the measurable outcome we helped create.
        </p>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          {projects.map((project) => (
            <article
              key={project.title}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 24,
                overflow: "hidden",
                background: "linear-gradient(135deg, #fff 0%, #fcf7f1 100%)",
                boxShadow: "0 20px 50px rgba(34, 30, 27, 0.05)",
              }}
            >
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 9",
                    background: "var(--cream)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                </div>
                <div style={{ padding: "2rem" }}>
                  <div
                    className="section-label"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    {project.label}
                  </div>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "1.8rem",
                      color: "var(--ink)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p
                    style={{
                      color: "var(--brand)",
                      fontWeight: 700,
                      marginBottom: "1rem",
                    }}
                  >
                    {project.impact}
                  </p>
                  <p
                    style={{
                      color: "var(--ink-soft)",
                      lineHeight: 1.85,
                      marginBottom: "1rem",
                    }}
                  >
                    {project.fullDescription}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.45rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "0.3rem 0.7rem",
                          borderRadius: 999,
                          background: "rgba(138,78,41,0.08)",
                          color: "var(--ink-soft)",
                          fontSize: "0.78rem",
                          border: "1px solid rgba(138,78,41,0.12)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                        color: "var(--ink)",
                      }}
                    >
                      Highlights
                    </h3>
                    <ul
                      style={{
                        paddingLeft: "1.2rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.8,
                      }}
                    >
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p
                    style={{
                      color: "var(--ink)",
                      fontWeight: 600,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {project.outcome}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                    }}
                  >
                    <Link href="/contact" className="btn-primary">
                      Start a similar project
                    </Link>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
