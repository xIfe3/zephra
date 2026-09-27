"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { processSteps } from "@/data/site";

/** Four phases on a vertical timeline whose copper line draws itself as you scroll. */
const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="process" className="section overflow-hidden">
      <div
        aria-hidden
        className="orb top-1/3 -left-60 h-[32rem] w-[32rem] text-steel-deep/25"
      />
      <div className="wrap relative grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="eyebrow">How it works</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h-section mt-6 text-bone">
              From first call <em className="text-gradient">to launch day.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede mt-6 max-w-md">
              Four clear phases, a fixed price and a date on the calendar. No scope creep, no disappearing acts —
              you see progress every single week.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div aria-hidden className="absolute top-2 bottom-2 left-[27px] w-px bg-white/10" />
          <motion.div
            aria-hidden
            style={{ scaleY: line }}
            className="absolute top-2 bottom-2 left-[27px] w-px origin-top bg-gradient-to-b from-copper-2 via-copper to-steel"
          />
          <ol>
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.num} delay={0.05 * i} className="relative pb-14 pl-20 last:pb-0">
              <span className="absolute top-0 left-0 flex h-14 w-14 items-center justify-center rounded-full border border-copper/30 bg-night font-mono text-sm text-copper-2 shadow-[0_0_0_6px_var(--color-night)]">
                {step.num}
              </span>
              <p className="pt-1 font-mono text-[0.7rem] tracking-[0.16em] text-mute uppercase">{step.duration}</p>
              <h3 className="mt-2 font-display text-[2.2rem] leading-none text-bone">{step.title}</h3>
              <p className="mt-4 max-w-lg text-mute">{step.text}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                {step.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 rounded-xl border hairline bg-white/[0.02] px-3 py-3 text-[0.85rem] text-bone/90"
                  >
                    <Check size={15} className="mt-0.5 shrink-0 text-copper" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;
