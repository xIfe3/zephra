"use client";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    // Shrink nav on scroll
    const nav = document.getElementById("navbar");
    const onScroll = () => {
      if (!nav) return;
      nav.style.padding = window.scrollY > 50 ? "0.75rem 5%" : "1.25rem 5%";
    };
    window.addEventListener("scroll", onScroll);

    // Scroll reveal observer
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 5%",
        background: "rgba(5,5,8,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "padding 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#f0f0f8" }}
        className="font-syne" style2={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
        <div className="anim-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "#00f5a0", boxShadow: "0 0 12px #00f5a0", flexShrink: 0 }} />
        <span className="font-syne" style={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.02em" }}>ZEPHRA</span>
      </a>

      {/* Nav links — hidden on mobile */}
      <ul className="hidden md:flex" style={{ gap: "2.5rem", listStyle: "none" }}>
        {["Services", "Work", "About", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        style={{ background: "#00f5a0", color: "#020906", border: "none", padding: "0.6rem 1.5rem", borderRadius: "100px", fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.02em", cursor: "none", transition: "box-shadow 0.3s, transform 0.2s" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(0,245,160,0.45)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ""; (e.currentTarget as HTMLElement).style.transform = ""; }}
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Get a Quote
      </button>
    </nav>
  );
};

export default Header;
