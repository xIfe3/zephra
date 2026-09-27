import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Case Studies — MVPs, SaaS & Mobile Apps We've Built",
  description:
    "Explore Zephra Studio case studies: fintech, healthcare, SaaS analytics, personal finance and PropTech products designed, built and launched for startup founders.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <div aria-hidden className="orb -top-60 left-1/4 h-[40rem] w-[40rem] text-copper/20" />
        <section className="wrap relative pt-40 pb-16 sm:pt-48">
          <span className="eyebrow">Case studies</span>
          <h1 className="display mt-8 max-w-[16ch] text-[clamp(3rem,8vw,7rem)] text-bone">
            <SplitWords text="Real products, shaped around real problems." italicFrom={3} />
          </h1>
          <Reveal delay={0.3}>
            <p className="lede mt-8 max-w-2xl">
              Each story shows the thinking behind the build, the product decisions that mattered, and the outcome
              we helped create.
            </p>
          </Reveal>
        </section>

        <section className="wrap relative grid gap-6 pb-32 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <Link
                href={`/projects/${p.slug}`}
                className="card spotlight group block h-full overflow-hidden !rounded-[32px] p-5 sm:p-7"
              >
                <div
                  aria-hidden
                  className="orb -top-40 -right-40 h-[26rem] w-[26rem] opacity-20 transition-opacity duration-700 group-hover:opacity-45"
                  style={{ color: p.accent }}
                />
                <div className="relative transition-transform duration-1000 ease-out-expo group-hover:-translate-y-1.5">
                  <ProjectVisual project={p} sizes={i === 0 ? "(max-width: 768px) 92vw, 80vw" : "(max-width: 768px) 92vw, 45vw"} priority={i === 0} />
                </div>
                <div className="relative mt-7 flex items-start justify-between gap-6 px-1">
                  <div>
                    <p className="font-mono text-[0.68rem] tracking-[0.16em] text-mute uppercase">{p.label}</p>
                    <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3rem)] leading-none text-bone">{p.title}</h2>
                    <p className="mt-3 text-sm text-copper-2">{p.impact}</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-bone transition-all duration-500 group-hover:rotate-45 group-hover:border-copper group-hover:bg-copper group-hover:text-night">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
