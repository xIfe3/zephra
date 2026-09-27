"use client";

import type { ComponentPropsWithoutRef, PointerEvent } from "react";

/** A .card whose copper glow follows the cursor. */
const Spotlight = ({ className = "", onPointerMove, ...props }: ComponentPropsWithoutRef<"div">) => {
  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
    onPointerMove?.(e);
  };
  return <div className={`card spotlight ${className}`} onPointerMove={handleMove} {...props} />;
};

export default Spotlight;
