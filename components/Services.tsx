"use client";

const services = [
  { icon:"🌐", name:"Web Development",     desc:"High-performance websites and web apps built with modern frameworks. Fast, responsive, and conversion-focused from day one.",             tags:["Next.js","React","TypeScript","SEO"] },
  { icon:"⚙️", name:"Backend & APIs",       desc:"Scalable server-side systems, RESTful and GraphQL APIs, database architecture, and cloud infrastructure that grows with you.",          tags:["Node.js","PostgreSQL","AWS","Redis"] },
  { icon:"📱", name:"Mobile Apps",          desc:"Cross-platform mobile applications for iOS and Android that feel native, load fast, and keep users coming back.",                        tags:["React Native","Expo","iOS","Android"] },
  { icon:"🎨", name:"UI / UX Redesign",     desc:"We take ugly, confusing interfaces and transform them into clean, intuitive experiences your users will actually enjoy.",                 tags:["Figma","Design Systems","Prototyping"] },
  { icon:"🤖", name:"AI Integration",       desc:"Embed AI into your product — from smart automation to LLM-powered features, we integrate intelligence that adds real value.",            tags:["OpenAI","LangChain","RAG","Automation"] },
  { icon:"🔧", name:"Maintenance & Support",desc:"We stay with you after launch. Bug fixes, performance upgrades, feature additions — your product keeps improving, not stagnating.", tags:["24hr Response","Monitoring","Updates"] },
  { icon:"🛒", name:"E-commerce Solutions",  desc:"Custom online stores and payment systems built to convert. From product catalogs to checkout flows, we make buying effortless.",       tags:["Shopify","Stripe","Inventory","Payments"] },
  { icon:"☁️", name:"DevOps & Cloud",         desc:"CI/CD pipelines, container orchestration, and cloud infrastructure — so your deploys are fast, safe, and fully automated.",              tags:["Docker","GitHub Actions","Vercel","AWS"] },
];

const Services = () => (
  <section id="services" className="bg-bg2" style={{ padding:"7rem 5%", position:"relative" }}>
    {/* Header */}
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:"2rem", marginBottom:"4rem" }}>
      <div>
        <div className="section-label reveal">What We Do</div>
        <h2 className="font-syne reveal reveal-delay-1" style={{ fontWeight:800, fontSize:"clamp(2rem,4vw,3.2rem)", lineHeight:1.1, letterSpacing:"-0.03em", color:"#f0f0f8" }}>
          Services Built<br />for the Real World
        </h2>
      </div>
      <p className="reveal reveal-delay-2" style={{ color:"rgba(240,240,248,0.45)", fontSize:"1.05rem", maxWidth:480, lineHeight:1.7 }}>
        We don't just write code. We solve problems, eliminate bottlenecks, and ship products that actually work under pressure.
      </p>
    </div>

    {/* Grid — 1.5px gaps = visible borders between cells */}
    <div className="reveal" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:"1.5px", background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:24, overflow:"hidden" }}>
      {services.map((s) => (
        <div key={s.name} className="service-card bg-bg2" style={{ padding:"2.5rem", position:"relative", overflow:"hidden", transition:"background 0.3s" }}>
          <div className="card-shine" />
          <div style={{ width:48, height:48, background:"rgba(0,245,160,.1)", border:"1px solid rgba(0,245,160,.2)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", marginBottom:"1.5rem" }}>{s.icon}</div>
          <div className="font-syne" style={{ fontWeight:700, fontSize:"1.15rem", marginBottom:"0.75rem", color:"#f0f0f8" }}>{s.name}</div>
          <p style={{ color:"rgba(240,240,248,0.45)", fontSize:"0.9rem", lineHeight:1.7, marginBottom:"1.25rem" }}>{s.desc}</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
            {s.tags.map(tag => (
              <span key={tag} style={{ fontSize:"0.7rem", fontWeight:500, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"100px", padding:"0.25rem 0.7rem", color:"rgba(240,240,248,0.45)" }}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
