"use client";

import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => (
  <footer
    className="bg-dark"
    style={{
      padding: "3rem 5%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1.5rem",
    }}
  >
    {/* Logo + copyright */}
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.6rem" }}>
        <img src="/logo.png" alt="Zephra" style={{ width: 140, height: "auto" }} />
      </div>
      <div style={{ fontSize: "0.85rem", color: "var(--dark-text-soft)" }}>
        © 2026 Zephra Studio — MVP Builders for Startups
      </div>
    </div>

    {/* Links */}
    <div style={{ display: "flex", gap: "2rem" }}>
      {["Services", "Work", "About", "Contact"].map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          style={{
            color: "var(--dark-text-soft)",
            textDecoration: "none",
            fontSize: "0.875rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--dark-text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dark-text-soft)")}
        >
          {link}
        </a>
      ))}
    </div>

    {/* Socials */}
    <div style={{ display: "flex", gap: "0.75rem" }}>
      {[
        { icon: <FaXTwitter size={18} />, title: "X", href: "https://x.com/zephradev" },
        { icon: <FaLinkedinIn size={18} />, title: "LinkedIn", href: "https://www.linkedin.com/company/zephradev" },
        { icon: <FaGithub size={18} />, title: "GitHub", href: "https://github.com/zephradev" },
        { icon: <FaInstagram size={18} />, title: "Instagram", href: "https://www.instagram.com/zephradev/" },
      ].map((s) => (
        <a
          key={s.title}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          title={s.title}
          style={{
            width: 38,
            height: 38,
            borderRadius: 8,
            border: "1px solid var(--dark-line)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            color: "var(--dark-text)",
            transition: "border-color 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--brand-on-dark)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--dark-line)")}
        >
          {s.icon}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
