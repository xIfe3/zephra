"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Work", "Projects", "About", "Contact"];

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        height: scrolled ? 80 : 100,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "0.1rem 5%" : "1.25rem 5%",
        background: "#221E1B",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.15)"
          : "1px solid transparent",
        transition: "all 0.2s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <img
          src="/logo.png"
          alt="Zephra"
          style={{ width: 150, height: "auto" }}
        />
      </a>

      {/* Nav links — hidden on mobile */}
      <ul
        className="hidden md:flex"
        style={{ gap: "2.25rem", listStyle: "none" }}
      >
        {links.map((item) => {
          const href =
            item === "Projects" ? "/projects" : `#${item.toLowerCase()}`;
          return (
            <li key={item}>
              <a href={href} className="nav-link">
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      {/* CTA — hidden on mobile */}
      <a
        href="#contact"
        className="btn-primary hidden md:inline-flex"
        style={{ padding: "0.65rem 1.5rem", fontSize: "0.9rem" }}
      >
        Book a Call
      </a>

      {/* Hamburger — visible on mobile only */}
      <button
        className="flex md:hidden flex-col"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          background: "none",
          border: "none",
          gap: 5,
          cursor: "pointer",
          padding: 4,
          zIndex: 110,
        }}
      >
        <span
          style={{
            width: 24,
            height: 2,
            background: "#fff",
            borderRadius: 2,
            transition: "transform 0.2s",
            transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
          }}
        />
        <span
          style={{
            width: 24,
            height: 2,
            background: "#fff",
            borderRadius: 2,
            transition: "opacity 0.2s",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: 24,
            height: 2,
            background: "#fff",
            borderRadius: 2,
            transition: "transform 0.2s",
            transform: menuOpen
              ? "rotate(-45deg) translate(4px, -4px)"
              : "none",
          }}
        />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(34,30,27,0.4)",
            zIndex: 99,
          }}
        />
      )}

      {/* Mobile slide-in menu */}
      <div
        className="flex md:hidden flex-col"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "70%",
          maxWidth: 300,
          height: "100vh",
          background: "var(--paper)",
          borderLeft: "1px solid var(--line)",
          zIndex: 105,
          padding: "5rem 2rem 2rem",
          gap: "1.5rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.25s ease",
        }}
      >
        {links.map((item) => {
          const href =
            item === "Projects" ? "/projects" : `#${item.toLowerCase()}`;
          return (
            <a
              key={item}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
              style={{
                fontSize: "1.15rem",
                color: "#fff",
                textDecoration: "none",
                padding: "0.6rem 0",
                borderBottom: "1px solid var(--line-soft)",
              }}
            >
              {item}
            </a>
          );
        })}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="btn-primary"
          style={{ marginTop: "1rem", justifyContent: "center" }}
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
};

export default Header;
