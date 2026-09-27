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
  /** Brand colour of the product — tints its glow on cards and the case study. */
  accent: string;
  /** "web" screenshots get a browser frame; "mobile" mockups are shown as-is. */
  format: "web" | "mobile";
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    label: "AI Email Assistant",
    title: "BoxieAI",
    slug: "boxieai",
    impact: "3 AI actions on every email",
    tech: ["Next.js", "NestJS", "OpenAI GPT-4o", "BullMQ", "Redis", "PostgreSQL", "Gmail API", "Paystack"],
    description:
      "An AI inbox that unifies multiple Gmail accounts and sorts every email into Urgent, Opportunity or Noise — with a short summary and a suggested reply for each.",
    fullDescription:
      "BoxieAI started from a simple frustration: important emails get buried across too many inboxes. We built an intelligence layer between the inbox and your attention — it connects several Gmail accounts through secure OAuth, pulls every message into one priority-sorted view, and runs each email through an AI pipeline that classifies it, summarises it and drafts a reply.",
    highlights: [
      "Multi-account Gmail sync over OAuth 2.0, processed in background queues with BullMQ and Redis",
      "GPT-4o pipeline that classifies, summarises and drafts a reply for every incoming email",
      "Daily briefing, custom inbox rules and Paystack-powered subscription billing",
    ],
    outcome:
      "One dashboard instead of a handful of tabs: what needs action rises to the top, and replying takes seconds instead of reading every thread.",
    image: "/projects/boxieai.png",
    accent: "#f97352",
    format: "web",
    live: "https://boxieai.zephra.dev",
    github: "",
  },
  {
    label: "School Management SaaS",
    title: "EduPro",
    slug: "edupro",
    impact: "Every school gets its own branded portal",
    tech: ["Next.js", "NestJS", "PostgreSQL", "pgvector", "Claude AI", "Redis", "Paystack", "Flutterwave", "Termii SMS"],
    description:
      "A multi-tenant school operating system for Nigerian schools — branded dashboards, CBT exams, attendance, term results, fee billing and an AI study assistant.",
    fullDescription:
      "EduPro gives every Nigerian school its own branded platform on its own subdomain. Administrators, teachers and students each get a dashboard built around their daily work — marking attendance, setting and sitting computer-based exams, computing term results and report cards, and paying fees online — all backed by a single, secure multi-tenant system.",
    highlights: [
      "Multi-tenant architecture: every school gets its own branded subdomain with isolated data",
      "CBT exams, question bank, timetables, term results and printable report cards with verification codes",
      "“Bayo”, an AI study assistant grounded in school content (RAG on pgvector) that builds personalised study plans",
    ],
    outcome:
      "Schools replace paper registers, spreadsheets and manual result computation with one system — while fee receipts, SMS alerts and report cards go out automatically.",
    image: "/projects/edupro.png",
    accent: "#d9772b",
    format: "web",
    live: "",
    github: "",
  },
  {
    label: "Bill Payment Wallet",
    title: "Ziippa",
    slug: "ziippa",
    impact: "4 networks · 3 TV providers · 1 wallet",
    tech: ["Next.js", "NestJS", "Drizzle ORM", "PostgreSQL", "Redis", "VTpass", "Flutterwave", "Turborepo"],
    description:
      "A wallet for everyday Nigerian bills — fund it once, then buy airtime and data, pay electricity and renew cable TV in a couple of taps, without touching a card again.",
    fullDescription:
      "Paying bills in Nigeria usually means a different app, a different card and a different failed transaction for each one. Ziippa puts them behind a single wallet: users fund it through Flutterwave, then top up airtime and data on MTN, Glo, Airtel and 9mobile, buy electricity tokens, and renew DStv, GOtv or StarTimes — all from one dashboard with a clear transaction history.",
    highlights: [
      "One wallet, funded via Flutterwave, that pays for airtime, data, electricity and cable TV",
      "VTpass integration covering all four mobile networks, prepaid electricity and three TV providers",
      "OTP-verified sign-up, JWT auth and a rate-limited, Redis-backed API",
    ],
    outcome:
      "Recurring bills become a two-tap habit instead of a monthly chore — and every purchase lands in one clean transaction history.",
    image: "/projects/ziippa.png",
    accent: "#6d4aff",
    format: "web",
    live: "",
    github: "",
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
    accent: "#a855f7",
    format: "web",
    live: "https://flowanalytics-zephra.vercel.app/",
    github: "https://github.com/zephradev/flowanalytics",
  },
  {
    label: "Task-Based Earning Platform",
    title: "X2Factor",
    slug: "x2factor",
    impact: "Live, with a full audit trail on every payout",
    tech: ["Next.js", "NestJS", "Drizzle ORM", "Neon Postgres", "Flutterwave", "AWS S3", "Resend", "Turborepo"],
    description:
      "A rewards platform where users complete tasks, refer friends and keep daily streaks — with every reward tracked in one wallet and paid out through Flutterwave.",
    fullDescription:
      "X2Factor pays real money, so trust mattered more than anything: every task, bonus and withdrawal had to be reviewed, recorded and explainable. We built a complete rewards economy — tasks with proof uploads, referral commissions, daily check-in streaks and subscription plans — around a single wallet with a clear transaction history.",
    highlights: [
      "Wallet ledger covering deposits, earnings, bonuses, referrals and withdrawals via Flutterwave",
      "Admin console for task review, payouts, plans, support tickets, roles and a full audit log",
      "Security-first API with rate limiting, hardened headers and verified payment webhooks",
    ],
    outcome:
      "Money moving through the platform is fully traceable — users stay confident, and operators run everything from one admin console.",
    image: "/projects/x2factor.png",
    accent: "#14b8a6",
    format: "web",
    live: "https://x2factor.com",
    github: "",
  },
  {
    label: "School Website & Portal",
    title: "Regina Nostra Schools",
    slug: "regina-nostra",
    impact: "Live school portal with online fee payments",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Paystack", "Cloudinary", "Tailwind"],
    description:
      "A website and school portal for Regina Nostra Schools in Enugu — admissions and announcements for parents, results and fee payments for students, and one dashboard for staff.",
    fullDescription:
      "Regina Nostra Schools needed more than a brochure site. We built their public website and a connected school portal: families find admissions information, the prospectus, fee structures and announcements in one place; students log in to see their results and pay fees; and administrators run the school's records from a single dashboard.",
    highlights: [
      "Public site with admissions, downloadable prospectus and application form, gallery, FAQ and announcements",
      "Student portal for results, calendar and online fee payments through Paystack",
      "Admin dashboard with bulk student upload from Excel/CSV, result publishing, payments and events",
    ],
    outcome:
      "Admissions, results and fee collection moved online — less paperwork for staff, and one trusted place for parents and students to find what they need.",
    image: "/projects/regina-nostra.png",
    accent: "#2563eb",
    format: "web",
    live: "https://reginanostraschools.com",
    github: "",
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
    accent: "#3b9dff",
    format: "web",
    live: "https://medibook-zephra.vercel.app/",
    github: "https://github.com/zephradev/medibook",
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
    accent: "#22c55e",
    format: "web",
    live: "https://savvio-budgetting.vercel.app/",
    github: "https://github.com/xIfe3/savvio",
  },
];
