import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./ScrollReveal";

export const metadata: Metadata = {
  title: "Zephra — Software Development Agency",
  description: "Zephra is a software development agency that builds fast, scalable web and mobile applications for startups and businesses.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
          precedence="default"
        />
      </head>

      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
