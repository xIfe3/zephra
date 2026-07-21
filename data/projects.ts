export type Project = {
  label: string;
  title: string;
  slug: string;
  impact: string;
  tech: string[];
  description: string;
  fullDescription: string;
  highlights: string[];
  outcome: string;
  image: string;
  galleryImages?: string[];
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    label: "Bill Payment Platform",
    title: "PayZeph",
    slug: "payzeph",
    impact: "Shipped in 14 Days",
    tech: ["Next.js", "NestJS", "TypeScript", "Turborepo", "Docker"],
    description:
      "A fullstack monorepo bill payment app with shared UI components, automated testing, and Docker-based deployment.",
    fullDescription:
      "PayZeph was designed as a high-trust payment experience for everyday Nigerians who wanted a simpler way to settle bills without friction. We built the platform end to end with a modern architecture that made it easy to ship fast while keeping quality high.",
    highlights: [
      "Shared design system across web and admin experiences",
      "Automated QA with Jest and Playwright",
      "Containerized deployment with Docker and CI-friendly setup",
    ],
    outcome:
      "The product launched quickly and gave the client a dependable foundation for scaling payments and future features.",
    image: "/projects/payzeph.png",
    live: "https://payzeph-zephra.vercel.app/",
    github: "https://github.com/zephradev/payzeph",
  },
  {
    label: "Healthcare Booking",
    title: "MediBook",
    slug: "medibook",
    impact: "2x Faster Than Industry Average",
    tech: ["Next.js 14", "NestJS", "Prisma", "PostgreSQL", "Tailwind"],
    description:
      "A doctor appointment platform with specialty search, real-time slot availability, JWT auth, and separate dashboards for patients and doctors.",
    fullDescription:
      "MediBook addressed a real pain point in medical scheduling by making appointment discovery and booking feel much more intuitive. We combined a polished frontend with a secure backend so patients and clinicians could work within the same flow without confusion.",
    highlights: [
      "Role-based patient and doctor dashboards",
      "Live availability with intelligent slot filtering",
      "Secure JWT authentication and protected routes",
    ],
    outcome:
      "The experience felt faster than most booking tools in the category, which helped improve trust and adoption from day one.",
    image: "/projects/medibook.png",
    live: "https://medibook-zephra.vercel.app/",
    github: "https://github.com/zephradev/medibook",
  },
  {
    label: "SaaS Analytics Dashboard",
    title: "FlowAnalytics",
    slug: "flowanalytics",
    impact: "Ready for Production in 2 Weeks",
    tech: ["Next.js 16", "Prisma", "Stripe", "Recharts", "NextAuth"],
    description:
      "A production-ready SaaS dashboard with tiered subscriptions, revenue analytics, CSV exports, Stripe billing, and Google OAuth.",
    fullDescription:
      "FlowAnalytics was built as a modern revenue intelligence workspace for growing digital businesses. The goal was to make data feel practical, not just visual, while giving the client a product that was ready to sell quickly.",
    highlights: [
      "Subscription tiers and Stripe billing integration",
      "Export-ready analytics workflows for internal reporting",
      "Google OAuth and secure account management",
    ],
    outcome:
      "The dashboard moved from concept to launch-ready in a short window, giving the product team a strong first release without overbuilding.",
    image: "/projects/flowanalytics.png",
    live: "https://flowanalytics-zephra.vercel.app/",
    github: "https://github.com/zephradev/flowanalytics",
  },
  {
    label: "Personal Finance Tracker",
    title: "Savvio",
    slug: "savvio",
    impact: "Built Without Scope Creep",
    tech: ["Next.js 15", "NestJS", "Prisma", "PostgreSQL", "Recharts", "JWT"],
    description:
      "A budget management app with expense tracking, income monitoring, savings goals, recurring payments, budget alerts, and interactive analytics charts.",
    fullDescription:
      "Savvio focused on deliberate product design. Instead of loading the app with features for the sake of it, we shaped it around everyday money habits and made progress feel motivating and easy to understand.",
    highlights: [
      "Goal-based savings planning and recurring payment tracking",
      "Insightful charting for income and expense trends",
      "Clear alerts and budgeting logic built into the experience",
    ],
    outcome:
      "The final experience stayed focused, clear, and useful, which made it easier to align product decisions with the user journey.",
    image: "/projects/savvio.png",
    live: "https://savvio-budgetting.vercel.app/",
    github: "https://github.com/xIfe3/savvio",
  },
  {
    label: "Property Rental Platform",
    title: "Letsten",
    slug: "letsten",
    impact: "Full Stack in Record Time",
    tech: [
      "Flutter",
      "React",
      "Flask",
      "PostgreSQL",
      "Stripe",
      "SocketIO",
      "Google Maps",
    ],
    description:
      "A full-stack rental platform for the Nigerian housing market connecting tenants with landlords, including property verification and in-app payments.",
    fullDescription:
      "Letsten was built to solve a fragmented market experience where tenants and landlords often struggled to connect with trust and clarity. We shaped the product around secure discovery, communication, and transactions in one place.",
    highlights: [
      "Property verification and tenant screening flow",
      "Real-time messaging and location-based search",
      "In-app payments and lease management support",
    ],
    outcome:
      "The product gives both sides of the market a stronger path to transact with confidence and less friction.",
    image: "/projects/letsten.png",
    live: "",
    github: "",
  },
];
