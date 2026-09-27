"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/motion/Reveal";
import { projects, type Project } from "@/data/projects";

/**
 * One case study card. Cards stick to the top and the one underneath gently
 * shrinks and dims as the next slides over it — a stacked-deck effect.
 */
const Card = ({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  const reduce = useReducedMotion();
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, reduce ? 1 : 1 - (total - index) * 0.04]);
  const dim = useTransform(progress, [start, Math.min(start + 1 / total, 1)], [0, index === total - 1 ? 0 : 0.5]);

  return (
    <div className="flex items-start lg:sticky lg:top-24 lg:pt-[var(--stack)]" style={{ ["--stack" as string]: `${index * 22}px` }}>
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className="card relative w-full overflow-hidden !rounded-[32px] bg-night-2"
      >
        <div
          aria-hidden
          className="orb -top-48 -right-48 h-[34rem] w-[34rem]"
          style={{ color: project.accent, opacity: 0.22 }}
        />
        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:p-14">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.16em] text-mute uppercase">
              <span className="text-copper">{String(index + 1).padStart(2, "0")}</span>
              <span className="h-px w-8 bg-white/15" />
              {project.label}
            </div>
            <h3 className="mt-6 font-display text-[clamp(2.8rem,5vw,4.4rem)] leading-[0.95] text-bone">
              {project.title}
            </h3>
            <p className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm text-copper-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: project.accent }} />
              {project.impact}
            </p>
            <p className="mt-6 text-mute">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.slice(0, 5).map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-10">
              <Link href={`/projects/${project.slug}`} className="btn btn-copper">
                Read case study <ArrowUpRight size={16} />
              </Link>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  Live product
                </a>
              )}
            </div>
          </div>
          <Link href={`/projects/${project.slug}`} aria-label={`${project.title} case study`} className="group block self-center">
            <div className="transition-transform duration-1000 ease-out-expo group-hover:-translate-y-2 group-hover:rotate-[-0.6deg]">
              <ProjectVisual project={project} sizes="(max-width: 1024px) 92vw, 55vw" />
            </div>
          </Link>
        </div>
        <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-night" />
      </motion.article>
    </div>
  );
};

const Work = ({ limit = 4 }: { limit?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const list = projects.slice(0, limit);

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="eyebrow">Selected work</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-section mt-6 max-w-[14ch] text-bone">
                Products founders are <em className="text-gradient">proud to ship.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link href="/projects" className="btn btn-ghost shrink-0">
              All case studies <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div ref={ref} className="mt-16 flex flex-col gap-[10vh]">
          {list.map((p, i) => (
            <Card key={p.slug} project={p} index={i} total={list.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
