"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { SplitWords } from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { heroStats } from "@/data/site";
import { projects } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as const;

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Screens fan out and drift at different speeds as you scroll — gives the hero depth.
  const yBack = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -160]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -260]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [front, mid, back] = [projects[2], projects[0], projects[1]];

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb orb-drift h-[42rem] w-[42rem] -top-60 -left-40 text-copper/30" />
        <div className="orb orb-drift h-[36rem] w-[36rem] top-40 -right-40 text-steel-deep/50 [animation-delay:-8s]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(243,238,231,1) 1px, transparent 1px), linear-gradient(90deg, rgba(243,238,231,1) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%)",
          }}
        />
      </div>

      <motion.div style={{ opacity: fade }} className="wrap relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pr-4 pl-2 text-[0.8rem] text-mute"
        >
          <span className="flex items-center gap-2 rounded-full bg-[#7dd3a0]/10 px-2.5 py-1 text-[#9fe3b9]">
            <span className="live-dot" /> Open
          </span>
          Currently accepting new projects
        </motion.div>

        <h1 className="display text-[clamp(3.2rem,9.2vw,8.6rem)] text-bone">
          <SplitWords text="Your idea," delay={0.1} />
          <br />
          <SplitWords text="live in 14 days." italicFrom={1} delay={0.22} />
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease }}
            className="lede max-w-xl text-[1.12rem]"
          >
            Zephra is a small, senior product studio for startup founders. We design and build MVPs, web and
            mobile apps, and AI features — one scope call, one fixed price, and a real product your users can
            touch two weeks later.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="flex flex-wrap gap-3 lg:justify-end"
          >
            <Link href="/#contact" className="btn btn-copper">
              Book your free scope call <ArrowRight size={17} />
            </Link>
            <Link href="/#work" className="btn btn-ghost">
              See our work <ArrowDown size={16} />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating product screens */}
      <div className="wrap relative mt-20 sm:mt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease }}
          className="relative mx-auto h-[clamp(15rem,52vw,40rem)] max-w-6xl"
        >
          <motion.div style={{ y: yBack }} className="will-change-transform absolute top-0 left-0 w-[58%] opacity-50">
            <ProjectVisual project={back} sizes="40vw" />
          </motion.div>
          <motion.div style={{ y: yMid }} className="will-change-transform absolute top-[6%] right-0 w-[58%] opacity-80">
            <ProjectVisual project={mid} sizes="40vw" />
          </motion.div>
          <motion.div style={{ y: yFront }} className="will-change-transform absolute top-[22%] left-1/2 w-[72%] -translate-x-1/2">
            <div className="orb -inset-16 -z-10 text-copper/30" />
            <ProjectVisual project={front} sizes="(max-width: 768px) 90vw, 60vw" priority />
          </motion.div>
        </motion.div>
      </div>

      {/* Proof strip */}
      <div className="wrap relative mt-12">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border hairline bg-white/[0.06] md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-night-2 px-6 py-7">
              <dt className="font-mono text-[0.68rem] tracking-[0.16em] text-mute uppercase">{s.label}</dt>
              <dd className="mt-2 font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-bone">
                <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
