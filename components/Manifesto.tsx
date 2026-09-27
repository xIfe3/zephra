"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const text =
  "Most founders don't need another agency. They need a partner who listens, tells them the truth, and ships the thing — so they can finally put it in front of real people. That's the only job we do.";

const Word = ({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
};

/** A statement that lights up word by word as it's read — the emotional pivot of the page. */
const Manifesto = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  return (
    <section aria-label="Our belief" className="section">
      <div className="wrap">
        <span className="eyebrow">Why we exist</span>
        <p
          ref={ref}
          aria-label={text}
          className="mt-8 max-w-[22ch] font-display text-[clamp(2.2rem,5.4vw,4.8rem)] leading-[1.08] tracking-[-0.015em] text-bone sm:max-w-[26ch]"
        >
          {words.map((word, i) => (
            <Word
              key={i}
              word={word}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            />
          ))}
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
