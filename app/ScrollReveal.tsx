"use client";

import { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    // Observe everything already on the page…
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // …and anything mounted later (tab panels, "show more" content, modals).
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(".reveal")) observer.observe(node);
          node.querySelectorAll?.(".reveal").forEach((el) => observer.observe(el));
        });
      }
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};

export default ScrollReveal;
