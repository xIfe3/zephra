"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Buttery inertial scrolling. Disabled for visitors who prefer reduced motion. */
const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // lerp (not a fixed duration) follows the wheel closely, so scrolling never feels delayed.
    const lenis = new Lenis({ lerp: 0.14, autoRaf: true, anchors: { offset: -80 } });
    return () => lenis.destroy();
  }, []);

  return null;
};

export default SmoothScroll;
