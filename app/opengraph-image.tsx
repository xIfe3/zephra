import { ImageResponse } from "next/og";

// The preview card shown when the site is shared on WhatsApp, X, LinkedIn, Slack…
export const alt = "Zephra Studio — your idea, live in 14 days";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#07090e",
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(212,144,95,0.45), transparent 45%), radial-gradient(circle at 95% 100%, rgba(79,109,147,0.55), transparent 50%)",
          color: "#f3eee7",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 6, color: "#f0bb90" }}>
          ZEPHRA STUDIO
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, lineHeight: 1, letterSpacing: -3 }}>
          <span>Your idea,</span>
          <span style={{ fontStyle: "italic", color: "#f0bb90" }}>live in 14 days.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a4a9b4", fontFamily: "sans-serif" }}>
          <span>MVPs · Web & mobile apps · AI products</span>
          <span>zephra.dev</span>
        </div>
      </div>
    ),
    size,
  );
}
