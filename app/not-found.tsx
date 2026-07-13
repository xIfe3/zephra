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
        background: "var(--paper)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        className="font-display"
        style={{
          fontSize: "clamp(5rem, 15vw, 9rem)",
          fontWeight: 600,
          color: "var(--brand-tint)",
          lineHeight: 1,
          marginBottom: "0.5rem",
        }}
      >
        404
      </h1>
      <h2
        className="font-display"
        style={{
          fontSize: "clamp(1.25rem, 3vw, 2rem)",
          fontWeight: 600,
          color: "var(--ink)",
          marginBottom: "1rem",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          color: "var(--ink-soft)",
          fontSize: "1.05rem",
          lineHeight: 1.7,
          maxWidth: 420,
          marginBottom: "2rem",
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
