"use client";

import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot) { dot.style.left = mx + "px"; dot.style.top = my + "px"; }
    };
    document.addEventListener("mousemove", handleMouseMove);

    const animRing = () => {
      if (ring) {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      requestAnimationFrame(animRing);
    };
    animRing();

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="cursor" id="cursor">
      <div className="cursor-ring" id="cursorRing" />
      <div className="cursor-dot" id="cursorDot" />
    </div>
  );
};

export default Cursor;
