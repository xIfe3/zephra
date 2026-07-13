"use client";

import { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  children: ReactNode[];
  slideSize?: string;
  gap?: string;
}

/** Mobile drag-carousel — no arrows, no dots, just swipe. */
const Carousel = ({ children, slideSize = "85%", gap = "1rem" }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start", dragFree: true });

  return (
    <div ref={emblaRef} style={{ overflow: "hidden" }}>
      <div style={{ display: "flex", gap }}>
        {children.map((child, i) => (
          <div key={i} style={{ flex: `0 0 ${slideSize}`, minWidth: 0 }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
