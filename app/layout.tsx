import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./ScrollReveal";

export const metadata: Metadata = {
  title: "Zephra — Software Development Studio",
  description:
    "Zephra is a software development studio that builds fast, scalable web and mobile products for startups and businesses.",
  icons: {
    icon: "/logo-z.png",
    shortcut: "/favicon.ico",
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
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
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
