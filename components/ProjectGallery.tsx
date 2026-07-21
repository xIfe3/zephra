"use client";

import { useEffect } from "react";
import { projects } from "@/data/projects";

declare global {
  interface Window {
    Fancybox?: {
      bind: (selector: string, options?: Record<string, unknown>) => void;
    };
  }
}

const ProjectGallery = ({ slug }: { slug: string }) => {
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    const loadFancybox = async () => {
      if (typeof window === "undefined") return;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js";
      script.async = true;
      script.onload = () => {
        window.Fancybox?.bind("[data-fancybox='gallery']", {
          Toolbar: {
            display: ["close"],
          },
          Thumbs: { showOnStart: false },
          animated: true,
        });
      };
      document.body.appendChild(script);
    };

    loadFancybox();
  }, [slug]);

  if (!project) return null;

  const galleryImages = [project.image, project.image, project.image];

  return (
    <div style={{ marginTop: "1.5rem", maxWidth: 860 }}>
      <h2
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          marginBottom: "1rem",
          color: "var(--ink)",
        }}
      >
        Project gallery
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {galleryImages.map((image, index) => (
          <a
            key={`${project.slug}-${index}`}
            href={image}
            data-fancybox="gallery"
            data-caption={`${project.title} — View ${index + 1}`}
            style={{
              display: "block",
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--line)",
            }}
          >
            <img
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              style={{
                width: "100%",
                height: 120,
                objectFit: "cover",
                display: "block",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
