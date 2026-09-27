import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} — ${project.label} Case Study`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title,
      description: project.description,
      images: [{ url: project.image, alt: `${project.title} product screenshot` }],
    },
    twitter: { card: "summary_large_image", title, description: project.description, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: project.title,
        headline: `${project.title} — ${project.label}`,
        description: project.fullDescription,
        image: `${site.url}${project.image}`,
        url: `${site.url}/projects/${project.slug}`,
        creator: { "@id": `${site.url}/#organization` },
        keywords: project.tech.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Case studies", item: `${site.url}/projects` },
          { "@type": "ListItem", position: 3, name: project.title, item: `${site.url}/projects/${project.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main className="relative overflow-hidden">
        <div
          aria-hidden
          className="orb -top-40 right-0 h-[40rem] w-[40rem]"
          style={{ color: project.accent, opacity: 0.16 }}
        />
        <article>
          <header className="wrap relative pt-36 sm:pt-44">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-bone">
              <ArrowLeft size={16} /> All case studies
            </Link>
            <div className="mt-10">
              <span className="eyebrow">{project.label}</span>
            </div>
            <h1 className="display mt-6 text-[clamp(3.6rem,11vw,10rem)] text-bone">
              <SplitWords text={project.title} />
            </h1>
            <Reveal delay={0.25}>
              <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <p className="lede max-w-2xl text-[1.15rem]">{project.fullDescription}</p>
                <dl className="grid grid-cols-2 gap-6 border-t hairline pt-6 text-sm">
                  <div>
                    <dt className="font-mono text-[0.66rem] tracking-[0.16em] text-mute uppercase">Result</dt>
                    <dd className="mt-2 text-copper-2">{project.impact}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.66rem] tracking-[0.16em] text-mute uppercase">Stack</dt>
                    <dd className="mt-2 text-bone">{project.tech.slice(0, 3).join(", ")}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </header>

          <Reveal delay={0.1} className="wrap relative mt-16">
            <ProjectVisual project={project} sizes="(max-width: 1320px) 94vw, 1200px" priority />
          </Reveal>

          <section className="wrap section grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2 className="h-section text-bone">
                What made it <em className="text-gradient">work.</em>
              </h2>
            </Reveal>
            <div>
              <ul className="border-t hairline">
                {project.highlights.map((h, i) => (
                  <Reveal as="li" key={h} delay={i * 0.06} className="flex items-start gap-5 border-b hairline py-7">
                    <span className="font-mono text-xs text-copper">0{i + 1}</span>
                    <p className="text-lg text-bone">{h}</p>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={0.1}>
                <div className="card mt-10 p-8">
                  <p className="font-mono text-[0.68rem] tracking-[0.16em] text-mute uppercase">The outcome</p>
                  <p className="mt-4 font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-snug text-bone">
                    {project.outcome}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">
                      <Check size={12} className="text-copper" /> {t}
                    </span>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/#contact" className="btn btn-copper">
                    Build something similar <ArrowRight size={17} />
                  </Link>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                      Visit live product <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
          </section>
        </article>

        <Link href={`/projects/${next.slug}`} className="group block border-t hairline">
          <div className="wrap flex flex-col gap-4 py-20 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-mute uppercase">Next case study</p>
              <p className="mt-4 font-display text-[clamp(3rem,8vw,6.5rem)] leading-none text-bone transition-colors duration-500 group-hover:text-copper-2">
                {next.title}
              </p>
            </div>
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-bone transition-all duration-500 group-hover:rotate-45 group-hover:border-copper group-hover:bg-copper group-hover:text-night">
              <ArrowUpRight size={22} />
            </span>
          </div>
        </Link>
      </main>
      <Footer />
    </>
  );
}
