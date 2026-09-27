"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section" | "span";
};

/** Fades and lifts content into view once, as it enters the viewport. */
export const Reveal = ({ children, delay = 0, y = 28, className, as = "div" }: RevealProps) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
};

/** Headline that rises in word by word from behind a mask. */
export const SplitWords = ({
  text,
  className,
  delay = 0,
  italicFrom,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Words from this index on are set in copper italic. */
  italicFrom?: number;
}) => {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text} role="text">
      {words.map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block ${italicFrom !== undefined && i >= italicFrom ? "italic text-gradient pr-[0.06em]" : ""}`}
            initial={reduce ? false : { y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
};
