"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/data/site";

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

const Avatar = ({ name, size = 44 }: { name: string; size?: number }) => (
  <span
    className="flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copper-2 via-copper to-steel-deep font-semibold text-night"
    style={{ width: size, height: size, fontSize: size * 0.34 }}
  >
    {initials(name)}
  </span>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const t = testimonials[active];

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, [paused, reduce]);

  return (
    <section id="testimonials" className="section overflow-hidden">
      <div aria-hidden className="orb -right-40 top-10 h-[30rem] w-[30rem] text-copper/15" />
      <div className="wrap relative">
        <Reveal>
          <span className="eyebrow">Client stories</span>
        </Reveal>

        <div
          className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <figure className="relative min-h-[22rem] sm:min-h-[20rem]" aria-live="polite">
            <span aria-hidden className="absolute -top-10 -left-2 font-display text-[10rem] leading-none text-copper/25 select-none">
              &ldquo;
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="relative font-display text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.12] text-bone">
                  {t.text}
                </blockquote>
                <figcaption className="mt-10 flex flex-wrap items-center gap-4">
                  <Avatar name={t.name} size={52} />
                  <div>
                    <p className="font-semibold text-bone">{t.name}</p>
                    <p className="text-sm text-mute">{t.role}</p>
                  </div>
                  <span className="chip ml-auto !border-copper/30 !text-copper-2">{t.metric}</span>
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </figure>

          <div aria-label="Choose a testimonial" role="group" className="flex flex-col">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={`group relative flex items-center gap-4 border-b hairline py-4 text-left transition-colors ${
                  i === active ? "text-bone" : "text-mute hover:text-bone"
                }`}
              >
                <Avatar name={item.name} size={36} />
                <span className="flex-1">
                  <span className="block text-[0.95rem] font-medium">{item.name}</span>
                  <span className="block text-xs text-dim">{item.role}</span>
                </span>
                <span className="absolute bottom-[-1px] left-0 h-px w-full overflow-hidden">
                  {i === active && (
                    <motion.span
                      key={`${active}-${paused}`}
                      className="block h-full bg-copper"
                      initial={{ width: reduce || paused ? "100%" : "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: reduce || paused ? 0 : 7, ease: "linear" }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
