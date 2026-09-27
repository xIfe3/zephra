"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { nav, site } from "@/data/site";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Tuck the bar away while reading downwards, bring it back on any upward scroll.
      setHidden(y > 400 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-700 ease-out-expo ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="wrap pt-4">
          <nav
            aria-label="Main"
            className={`flex h-16 items-center justify-between rounded-full border px-3 pl-5 transition-all duration-500 ${
              scrolled
                ? "border-white/10 bg-night/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <Link href="/" aria-label={`${site.name} — home`} className="flex items-center">
              <Image src="/logo-wide.png" alt={site.name} width={700} height={162} priority className="h-8 w-auto sm:h-9" />
            </Link>

            <ul className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-[0.9rem] text-mute transition-colors hover:bg-white/[0.04] hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Link href="/#contact" className="btn btn-copper hidden !min-h-[44px] !py-2 !px-5 text-sm md:inline-flex">
                Book a call
                <ArrowUpRight size={16} />
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:hidden"
              >
                <span className="sr-only">Menu</span>
                <span
                  className={`absolute h-px w-5 bg-bone transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[4px]"}`}
                />
                <span
                  className={`absolute h-px w-5 bg-bone transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[4px]"}`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[45] flex flex-col bg-night/95 px-6 pt-32 pb-10 backdrop-blur-2xl md:hidden"
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(150% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/[0.06] py-4 font-display text-[2.6rem] leading-none text-bone"
                  >
                    <span className="font-mono text-xs text-copper">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3">
              <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-copper w-full">
                Book your free scope call <ArrowUpRight size={16} />
              </Link>
              <a href={`mailto:${site.email}`} className="text-center text-sm text-mute">
                {site.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
