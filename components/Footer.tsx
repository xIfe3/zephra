"use client";

import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => (
  <footer
    style={{
      padding: "3rem 5%",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1.5rem",
      background: "#050508",
    }}
  >
    {/* Logo + copyright */}
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: "0.4rem",
        }}
      >
        <img src="/zephra logo light.png" alt="Zephra" className="w-36" />
      </div>
      <div style={{ fontSize: "0.85rem", color: "rgba(240,240,248,0.45)" }}>
        © 2026 Zephra Studio. All rights reserved.
      </div>
    </div>

    {/* Links */}
    <div style={{ display: "flex", gap: "2rem" }}>
      {["Services", "Work", "About", "Contact"].map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          style={{
            color: "rgba(240,240,248,0.45)",
            textDecoration: "none",
            fontSize: "0.875rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f8")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(240,240,248,0.45)")
          }
        >
          {link}
        </a>
      ))}
    </div>

    {/* Socials */}
    <div style={{ display: "flex", gap: "0.75rem" }}>
      {[
        {
          icon: <FaXTwitter size={18} />,
          title: "X",
          href: "https://x.com/zephradev",
        },
        {
          icon: <FaLinkedinIn size={18} />,
          title: "LinkedIn",
          href: "https://linkedin.com/company/zephradev",
        },
        {
          icon: <FaGithub size={18} />,
          title: "GitHub",
          href: "https://github.com/zephradev",
        },
        {
          icon: <FaInstagram size={18} />,
          title: "Instagram",
          href: "https://www.instagram.com/zephradev/",
        },
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
            borderRadius: 10,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.875rem",
            textDecoration: "none",
            color: "#f0f0f8",
            transition: "border-color 0.3s, background 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(0,229,255,.3)";
            (e.currentTarget as HTMLElement).style.background =
              "rgba(0,229,255,.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLElement).style.background =
              "rgba(255,255,255,0.04)";
          }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
