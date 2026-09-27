import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import JsonLd from "@/components/seo/JsonLd";
import ChatLauncher from "@/components/ChatLauncher";
import { site, faqs } from "@/data/site";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "Zephra Studio — MVP Development Studio for Startups | Launch in 14 Days";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s · Zephra Studio" },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "MVP development",
    "MVP development agency",
    "startup app development",
    "build MVP in 14 days",
    "web app development",
    "mobile app development",
    "AI integration agency",
    "Next.js development agency",
    "software development studio Nigeria",
    "hire developers for startup",
  ],
  authors: [{ name: site.founder.name, url: site.founder.portfolio }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zephradev",
    creator: "@ifeanyicodes_",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-96x96.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#07090e",
  colorScheme: "dark",
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      image: `${site.url}/opengraph-image`,
      description: site.description,
      email: site.email,
      telephone: site.whatsapp,
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressCountry: "NG" },
      founder: { "@id": `${site.url}/#founder` },
      sameAs: site.socials.map((s) => s.url),
      knowsAbout: ["MVP development", "Web applications", "Mobile applications", "AI integration", "UI/UX design"],
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#founder`,
      name: site.founder.name,
      jobTitle: site.founder.role,
      worksFor: { "@id": `${site.url}/#organization` },
      url: site.founder.portfolio,
      image: `${site.url}/founder.jpeg`,
      sameAs: [
        "https://x.com/ifeanyicodes_",
        "https://www.linkedin.com/in/ifeanyichukwu-onyekwelu/",
        "https://github.com/xIfe3",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrument.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body>
        <JsonLd data={organization} />
        <SmoothScroll />
        {children}
        <ChatLauncher />
      </body>
    </html>
  );
}
