import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main
      className="bg-paper"
      style={{ minHeight: "100vh", padding: "6rem 5% 5rem" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <Link
          href="/projects"
          style={{
            color: "var(--brand)",
            fontWeight: 600,
            textDecoration: "none",
            marginBottom: "1.5rem",
            display: "inline-block",
          }}
        >
          ← Back to all projects
        </Link>

        <section
          style={{
            border: "1px solid var(--line)",
            borderRadius: 28,
            overflow: "hidden",
            background: "linear-gradient(135deg, #fff 0%, #fcf7f1 100%)",
            boxShadow: "0 24px 60px rgba(34, 30, 27, 0.05)",
          }}
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
            <div className="section-label" style={{ marginBottom: "0.75rem" }}>
              {project.label}
            </div>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 3.4vw, 2.9rem)",
                color: "var(--ink)",
                marginBottom: "0.75rem",
              }}
            >
              {project.title}
            </h1>
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
                marginBottom: "1.25rem",
              }}
            >
              {project.fullDescription}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.45rem",
                marginBottom: "1.5rem",
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
            <div style={{ marginBottom: "1.5rem" }}>
              <h2
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  marginBottom: "0.6rem",
                  color: "var(--ink)",
                }}
              >
                What made it work
              </h2>
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link href="/contact" className="btn-primary">
                Discuss a similar build
              </Link>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Visit live site
                </a>
              )}
            </div>

            <ProjectGallery slug={project.slug} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectPage;
