import Image from "next/image";
import BrowserFrame from "./BrowserFrame";
import type { Project } from "@/data/projects";

/** Shows a project's image in the right frame for its format. */
const ProjectVisual = ({
  project,
  sizes,
  priority,
  className = "",
}: {
  project: Project;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) => {
  const alt = `${project.title} — ${project.label} built by Zephra Studio`;

  if (project.format === "web") {
    return (
      <BrowserFrame
        src={project.image}
        alt={alt}
        url={project.live || `${project.slug}.app`}
        sizes={sizes}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <div
      className={`relative aspect-[192/97] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      <Image src={project.image} alt={alt} fill sizes={sizes} priority={priority} className="object-contain scale-[1.55]" />
    </div>
  );
};

export default ProjectVisual;
