import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#050508",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        className="font-syne"
        style={{
          fontSize: "clamp(5rem, 15vw, 10rem)",
          fontWeight: 800,
          color: "rgba(0,229,255,0.12)",
          lineHeight: 1,
          marginBottom: "0.5rem",
        }}
      >
        404
      </h1>
      <h2
        className="font-syne"
        style={{
          fontSize: "clamp(1.25rem, 3vw, 2rem)",
          fontWeight: 700,
          color: "#f0f0f8",
          marginBottom: "1rem",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          color: "rgba(240,240,248,0.45)",
          fontSize: "1.05rem",
          lineHeight: 1.7,
          maxWidth: 420,
          marginBottom: "2rem",
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.85rem 2rem",
          borderRadius: 50,
          background: "#00e5ff",
          color: "#020906",
          fontSize: "0.9rem",
          fontWeight: 600,
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
