"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/data/site";

const greeting = "Hi Zephra! I'd like to talk about a project.";

/**
 * Floating chat launcher. Today it hands visitors to WhatsApp; the panel is the
 * slot where the custom Zephra assistant will live later.
 */
const ChatLauncher = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  // Stay out of the way on the hero; appear once the visitor starts exploring.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(greeting)}`;

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            id="chat-panel"
            role="dialog"
            aria-label="Chat with Zephra"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "bottom right" }}
            className="w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
          >
            <div className="flex items-center gap-3 border-b border-white/[0.06] bg-night-2 px-5 py-4">
              <span className="relative">
                <Image
                  src="/founder.jpeg"
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover object-top"
                />
                <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-night-2 bg-[#25d366]" />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-bone">{site.founder.name}</p>
                <p className="text-xs text-mute">Founder · replies personally</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-9 w-9 items-center justify-center rounded-full text-mute hover:bg-white/5 hover:text-bone"
              >
                <X size={18} />
              </button>
            </div>
            <div className="px-5 py-5">
              <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-3 text-[0.92rem] text-bone">
                Hey 👋 Got an idea you want to build? Tell me about it on WhatsApp — no forms, no sales pitch.
              </p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-5 w-full bg-[#25d366] !text-[#062d17] hover:bg-[#3ae07a]"
              >
                <FaWhatsapp size={20} /> Start chat on WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-dim">
                Prefer email?{" "}
                <a href={`mailto:${site.email}`} className="link-underline text-mute">
                  {site.email}
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? "Close chat" : "Chat with us on WhatsApp"}
        initial={false}
        animate={{ opacity: visible || open ? 1 : 0, scale: visible || open ? 1 : 0.6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{ pointerEvents: visible || open ? "auto" : "none" }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-[#062d17] shadow-[0_12px_40px_-8px_rgba(37,211,102,0.55)] transition-transform hover:scale-105"
      >
        {open ? <X size={24} /> : <FaWhatsapp size={28} />}
      </motion.button>
    </div>
  );
};

export default ChatLauncher;
