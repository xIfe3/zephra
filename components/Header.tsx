"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 5%",
        background: "rgba(5,5,8,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "padding 0.3s ease",
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
        <img src="/zephra logo light.png" alt="Zephra" className="w-36" />
      </a>

      {/* Nav links — hidden on mobile */}
      <ul
        className="hidden md:flex"
        style={{ gap: "2.5rem", listStyle: "none" }}
      >
        {["Services", "Work", "About", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA — hidden on mobile */}
      <button
        className="hidden md:inline-block"
        style={{
          background: "#00e5ff",
          color: "#020906",
          border: "none",
          padding: "0.6rem 1.5rem",
          borderRadius: "100px",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 600,
          fontSize: "0.875rem",
          letterSpacing: "0.02em",
          cursor: "none",
          transition: "box-shadow 0.3s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 32px rgba(0,229,255,0.45)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "";
          (e.currentTarget as HTMLElement).style.transform = "";
        }}
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Get a Quote
      </button>

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
            background: "#f0f0f8",
            borderRadius: 2,
            transition: "transform 0.3s, opacity 0.3s",
            transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
          }}
        />
        <span
          style={{
            width: 24,
            height: 2,
            background: "#f0f0f8",
            borderRadius: 2,
            transition: "opacity 0.3s",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: 24,
            height: 2,
            background: "#f0f0f8",
            borderRadius: 2,
            transition: "transform 0.3s, opacity 0.3s",
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
            background: "rgba(0,0,0,0.6)",
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
          background: "rgba(10,10,15,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          zIndex: 105,
          padding: "5rem 2rem 2rem",
          gap: "1.5rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        {["Services", "Work", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="nav-link"
            style={{
              fontSize: "1.2rem",
              fontWeight: 500,
              color: "rgba(240,240,248,0.7)",
              textDecoration: "none",
              padding: "0.5rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {item}
          </a>
        ))}
        <button
          style={{
            marginTop: "1rem",
            background: "#00e5ff",
            color: "#020906",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: 100,
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize: "0.95rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setMenuOpen(false);
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Header;
