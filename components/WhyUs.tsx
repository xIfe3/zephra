"use client";

import { Zap, Rocket, Target, Wallet, Volume2, Hammer } from "lucide-react";
import Carousel from "./Carousel";

const items = [
  {
    Icon: Zap,
    title: "Fast Delivery",
    text: "We ship MVPs in weeks, not months. Tight timelines are our default mode, not our exception.",
  },
  {
    Icon: Rocket,
    title: "Built by Founders",
    text: "We've launched startups too. We understand your pressure, your constraints, and what actually matters.",
  },
  {
    Icon: Target,
    title: "No Scope Creep",
    text: "Fixed timeline, clear deliverables, zero surprises. You know exactly what you're paying for and when it ships.",
  },
  {
    Icon: Wallet,
    title: "Transparent Pricing",
    text: "No hidden fees. No surprise invoices. We give you a fixed quote and stick to it.",
  },
  {
    Icon: Volume2,
    title: "Weekly Updates",
    text: "You're never in the dark. Weekly check-ins, Slack access, working product every sprint.",
  },
  {
    Icon: Hammer,
    title: "Production-Grade Code",
    text: "Clean, scalable code built to grow with your startup. Not oversheltered, not overengineered.",
  },
];

const WhyCard = ({ item }: { item: (typeof items)[number] }) => (
  <div className="trust-card">
    <div className="trust-icon">
      <item.Icon size={20} strokeWidth={1.75} />
    </div>
    <div className="font-display" style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: "var(--ink)" }}>
      {item.title}
    </div>
    <p style={{ color: "var(--ink-soft)", fontSize: "0.875rem", lineHeight: 1.65 }}>{item.text}</p>
  </div>
);

const WhyUs = () => (
  <section id="trust" className="bg-paper" style={{ padding: "7rem 5%", position: "relative" }}>
    <style>{`
      .why-grid { grid-template-columns:repeat(2,1fr); gap:1rem; }
      @media(min-width:1024px) { .why-grid { grid-template-columns:repeat(3,1fr); } }
      .trust-card { background:var(--cream); border:1px solid var(--line-soft); border-radius:14px; padding:2rem; transition:border-color 0.2s ease; height:100%; }
      .trust-card:hover { border-color: var(--brand); }
      .trust-icon { width:40px; height:40px; border-radius:10px; background:var(--brand-tint); color:var(--brand-dark); display:flex; align-items:center; justify-content:center; margin-bottom:1rem; }
    `}</style>

    <div className="section-label reveal">Why Choose Us</div>
    <h2
      className="font-display reveal reveal-delay-1"
      style={{
        fontWeight: 600,
        fontSize: "clamp(2rem,4vw,3rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: "var(--ink)",
        marginBottom: "4rem",
      }}
    >
      Built Different.
      <br />
      Delivered Better.
    </h2>

    {/* Tablet / desktop — grid */}
    <div className="why-grid hidden sm:grid">
      {items.map((item, i) => (
        <div key={item.title} className={`reveal reveal-delay-${i % 4}`}>
          <WhyCard item={item} />
        </div>
      ))}
    </div>

    {/* Mobile — drag carousel */}
    <div className="sm:hidden reveal">
      <Carousel slideSize="78%">
        {items.map((item) => (
          <WhyCard key={item.title} item={item} />
        ))}
      </Carousel>
    </div>
  </section>
);

export default WhyUs;
