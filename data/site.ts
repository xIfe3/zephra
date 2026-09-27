/**
 * Single source of truth for site copy, contact details and SEO facts.
 * Edit here — components and structured data read from this file.
 */

export const site = {
  name: "Zephra Studio",
  shortName: "Zephra",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zephra.dev",
  tagline: "MVP development studio for startup founders",
  description:
    "Zephra is a premium software studio that designs and builds MVPs, web apps, mobile apps and AI products for startups — scoped in one call, fixed-priced, and launched in 14 days.",
  email: "hello@zephra.dev",
  whatsapp: "+234 816 619 0067",
  /** Digits only, international format — used for wa.me links. */
  whatsappNumber: "2348166190067",
  whatsappLink: "https://wa.me/2348166190067",
  location: "Nigeria · Working globally",
  founder: {
    name: "Ifeanyi Onyekwelu",
    role: "Founder & Lead Engineer",
    portfolio: "https://xife3.space",
  },
  socials: [
    { name: "X", url: "https://x.com/zephradev" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/zephradev" },
    { name: "GitHub", url: "https://github.com/zephradev" },
    { name: "Instagram", url: "https://www.instagram.com/zephradev/" },
  ],
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Studio", href: "/#studio" },
  { label: "FAQ", href: "/#faq" },
];

export const heroStats = [
  { value: 60, suffix: "+", label: "Products shipped" },
  { value: 14, suffix: " days", label: "Idea to launch" },
  { value: 4.9, suffix: "★", label: "Client rating", decimals: 1 },
  { value: 100, suffix: "%", label: "On-time delivery" },
];

export const industries = [
  "Fintech",
  "HealthTech",
  "SaaS",
  "EdTech",
  "E-Commerce",
  "AI & Automation",
  "PropTech",
  "Logistics",
  "Media",
];

export const services = [
  {
    key: "mvp",
    name: "Full-Stack MVPs",
    desc: "From a napkin sketch to a live product real users pay for — frontend, backend, auth, payments and deployment, done properly.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    key: "mobile",
    name: "Mobile Apps",
    desc: "iOS and Android apps that feel native, load fast and survive the App Store review first time.",
    tags: ["React Native", "Expo", "Flutter"],
  },
  {
    key: "ai",
    name: "AI Integration",
    desc: "LLM features that actually earn their place — copilots, document intelligence, RAG search and workflow automation.",
    tags: ["OpenAI", "Claude", "RAG", "Agents"],
  },
  {
    key: "audit",
    name: "Product Audit",
    desc: "A sharp outside look at your app’s code, performance and UX — with a prioritised roadmap you can act on Monday.",
    tags: ["Performance", "UX", "Code review"],
  },
];

export const alsoServices = [
  "Backend & APIs",
  "UI/UX Redesign",
  "Design Systems",
  "Shopify Development",
  "WordPress Development",
  "Branding & Identity",
  "DevOps & Cloud",
  "Technical SEO",
];

export const processSteps = [
  {
    num: "01",
    title: "Discovery call",
    duration: "Day 0 · Free",
    text: "One honest hour about your idea, your users and your constraints. No sales pitch — if we're not the right fit, we'll tell you.",
    deliverables: ["1-page scope document", "Fixed price quote", "Clear 14-day timeline"],
  },
  {
    num: "02",
    title: "Design & architecture",
    duration: "Days 1–3",
    text: "Flows, wireframes and a visual direction you sign off, plus the database and API plan that keeps v2 easy.",
    deliverables: ["Clickable prototype", "Data & API architecture", "Stack signed off"],
  },
  {
    num: "03",
    title: "Build in sprints",
    duration: "Days 4–12",
    text: "You watch the product take shape in a live staging link. Weekly demos, direct chat with the engineer writing your code.",
    deliverables: ["Working build every week", "Direct Slack / WhatsApp access", "QA on every sprint"],
  },
  {
    num: "04",
    title: "Launch & grow",
    duration: "Day 14 →",
    text: "We ship to production, wire up analytics, and stay close while your first users arrive and the real feedback starts.",
    deliverables: ["Production deployment", "Analytics & monitoring", "Post-launch support window"],
  },
];

export const reasons = [
  {
    title: "Founder-to-founder",
    text: "You work directly with the person building your product. No account managers, no hand-off to a junior after the first call.",
  },
  {
    title: "Fixed price, fixed date",
    text: "One quote, locked in. If scope changes, we talk before a single extra hour is billed.",
  },
  {
    title: "Radical visibility",
    text: "A live staging link from week one and a weekly demo. You will never have to chase us for an update.",
  },
  {
    title: "Code you own",
    text: "Clean, typed, documented code in your own repo — ready for the team you hire next.",
  },
];

export const proofStats = [
  { value: 60, suffix: "+", label: "Products shipped", sub: "across startups & SMEs" },
  { value: 23, suffix: "", label: "MVPs in 14 days", sub: "launched this year" },
  { value: 100, suffix: "%", label: "On-time delivery", sub: "no missed deadlines" },
  { value: 30, suffix: "+", label: "Founders served", sub: "and counting" },
];

export const testimonials = [
  {
    name: "Adewale Kolade",
    role: "CEO, FlowAnalytics",
    metric: "10K+ MAU",
    text: "They delivered our dashboard in under six weeks and it handled 10,000 users without a single issue. Honestly shocked by the quality at this price point.",
  },
  {
    name: "Sarah Nwosu",
    role: "Founder, Verdant Market",
    metric: "500+ weekly orders",
    text: "I've worked with three agencies before. This is the first one that gave me weekly updates without me having to chase them. The app looks stunning too.",
  },
  {
    name: "Michael Tunde",
    role: "CTO, LegalOS",
    metric: "80% time saved",
    text: "The AI integration they built cut our contract review time by 80%. They understood our requirements immediately and executed without hand-holding.",
  },
  {
    name: "Tolu Adeyemi",
    role: "Founder, Letsten",
    metric: "300+ listings",
    text: "Zephra built our entire rental marketplace — payments, messaging, verification — in one clean build. It felt like having an in-house engineering team.",
  },
  {
    name: "Chidinma Eze",
    role: "Product Lead, PayZeph",
    metric: "Zero-downtime launch",
    text: "Fixed price, fixed timeline, and they hit both. The monorepo they left us with made it easy for our own team to keep shipping after handoff.",
  },
  {
    name: "David Okonkwo",
    role: "Founder, Savvio",
    metric: "5K+ budgets tracked",
    text: "I came in with a rough idea and left with a real product. They pushed back on scope creep in a good way — kept us focused on what mattered.",
  },
];

export const faqs = [
  {
    q: "Can you really build an MVP in 14 days?",
    a: "Yes — for a well-scoped MVP. The free discovery call exists to cut your idea down to the version that proves demand. Most of our MVPs ship in 14 days; larger platforms are split into 14-day milestones so you always have something live.",
  },
  {
    q: "How much does an MVP cost?",
    a: "Every project gets a fixed quote after the discovery call, based on scope rather than hours. You'll know the exact price and delivery date before any work starts, and it won't change unless you change the scope.",
  },
  {
    q: "Do I own the code?",
    a: "Completely. Everything lives in your GitHub repository from day one, and you own all intellectual property once the project is paid for.",
  },
  {
    q: "What happens after launch?",
    a: "Every build includes a post-launch support window for fixes and small tweaks. After that, most founders keep us on a flexible monthly retainer for new features — or we hand over cleanly to your in-house team.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. We're based in Nigeria and work with founders globally — fully remote, overlapping with your working hours, with communication over Slack, WhatsApp and weekly video demos.",
  },
  {
    q: "What if I only have an idea and no designs?",
    a: "That's where most founders start. We handle product thinking, UX and UI design as part of the build, so you only need to bring the problem you want to solve.",
  },
];

export const contactServices = [
  "MVP build (full product)",
  "Mobile app",
  "AI integration",
  "Product audit",
  "Redesign / UI-UX",
  "Need help scoping it",
  "Something else",
];

/** Budget ranges per currency — roughly equivalent tiers, rounded to numbers people actually say. */
export const budgetCurrencies = {
  USD: { symbol: "$", ranges: ["Under $3k", "$3k – $8k", "$8k – $20k", "$20k+"] },
  GBP: { symbol: "£", ranges: ["Under £2.5k", "£2.5k – £6k", "£6k – £15k", "£15k+"] },
  EUR: { symbol: "€", ranges: ["Under €3k", "€3k – €7.5k", "€7.5k – €18k", "€18k+"] },
  NGN: { symbol: "₦", ranges: ["Under ₦5m", "₦5m – ₦12m", "₦12m – ₦30m", "₦30m+"] },
} as const;

export type BudgetCurrency = keyof typeof budgetCurrencies;
