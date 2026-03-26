"use client";
import Image from "next/image";

const socials = [
  {
    name: "Twitter / X",
    url: "https://x.com/ifeanyicodes_",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ifeanyichukwu-onyekwelu/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/xIfe3",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/tech__doctor",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const Founder = () => (
  <section
    id="founder"
    className="bg-bg2"
    style={{ padding: "7rem 5%", position: "relative" }}
  >
    <style>{`
      .founder-grid { display:grid; grid-template-columns:1fr; gap:3rem; align-items:center; max-width:1100px; margin:0 auto; }
      @media(min-width:1024px){ .founder-grid { grid-template-columns:380px 1fr; gap:5rem; } }
      .founder-img-wrap {
        position:relative; width:100%; max-width:380px; aspect-ratio:3/4; border-radius:24px; overflow:hidden;
        border:1px solid rgba(255,255,255,0.08); margin:0 auto;
      }
      .founder-img-wrap::after {
        content:''; position:absolute; inset:0;
        background:linear-gradient(180deg, transparent 50%, rgba(5,5,8,0.85) 100%);
        pointer-events:none;
      }
      .founder-social {
        display:inline-flex; align-items:center; justify-content:center;
        width:42px; height:42px; border-radius:50%;
        border:1px solid rgba(255,255,255,0.1); color:rgba(240,240,248,0.5);
        transition:border-color 0.3s, color 0.3s, background 0.3s, transform 0.2s;
        text-decoration:none;
      }
      .founder-social:hover {
        border-color:#00e5ff; color:#00e5ff; background:rgba(0,229,255,0.06); transform:translateY(-2px);
      }
      .founder-stat { text-align:center; }
      .founder-stats { display:flex; gap:2rem; flex-wrap:wrap; }
      @media(max-width:767px){ .founder-stats { justify-content:center; } }
    `}</style>

    {/* Subtle glow */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "30%",
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(0,229,255,0.04), transparent 70%)",
        transform: "translate(-50%,-50%)",
        pointerEvents: "none",
      }}
    />

    <div className="founder-grid">
      {/* Image column */}
      <div className="reveal">
        <div className="founder-img-wrap">
          <Image
            src="/founder.jpeg"
            alt="Ifeanyi Onyekwelu — Founder of Zephra Studio"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 1024px) 100vw, 380px"
            priority
          />
          {/* Subtle dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(5,5,8,0.15) 0%, rgba(5,5,8,0.3) 60%, rgba(5,5,8,0.75) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Text column */}
      <div className="reveal reveal-delay-1">
        <div className="section-label">Meet the Founder</div>
        <h2
          className="font-syne"
          style={{
            fontWeight: 800,
            fontSize: "clamp(2rem,4vw,3.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#f0f0f8",
            marginBottom: "0.5rem",
          }}
        >
          Ifeanyi Onyekwelu
        </h2>
        <p
          className="gradient-text"
          style={{
            fontSize: "1.05rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
          }}
        >
          Founder &amp; Lead Developer — Zephra Studio
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              color: "rgba(240,240,248,0.45)",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            Ifeanyi is a full-stack developer with 5 years of experience
            building web and mobile products across fintech, edtech, and SaaS.
            He founded Zephra Studio to bring that same engineering quality to
            businesses that need software done right. When he's not writing
            code, he's teaching tech through his community Blume and documenting
            the build process publicly.
          </p>
          <p
            style={{
              color: "rgba(240,240,248,0.45)",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            From payment systems to booking platforms to multi-tenant
            dashboards — he brings real breadth to every project. That means
            he doesn't just write code, he understands the business context
            behind every feature. At Zephra Studio, clients aren't handed off
            to a junior dev after the first call. They work directly with the
            founder, start to finish.
          </p>
        </div>

        {/* Quick stats */}
        <div className="founder-stats" style={{ marginBottom: "2rem" }}>
          {[
            { value: "5+", label: "Years Experience" },
            { value: "60+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="founder-stat">
              <div
                className="font-syne"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "#00e5ff",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(240,240,248,0.4)",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="founder-social"
              title={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
