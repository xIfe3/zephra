"use client";

const projects = [
  { label:"SaaS Platform", title:"FlowAnalytics Dashboard", tech:"Next.js · PostgreSQL · Stripe · Recharts", bg:"linear-gradient(135deg,#0a1628,#112244,#0d2035)", accent:"rgba(0,245,160,.06)", col:"large" },
  { label:"E-Commerce",    title:"Verdant Market Platform",  tech:"React · Node.js · MongoDB · Paystack",   bg:"linear-gradient(135deg,#0f1a10,#1a3320,#0d1f15)", accent:"rgba(0,245,160,.05)", col:"medium" },
  { label:"Mobile App",    title:"HealthSync Patient App",   tech:"React Native · Firebase · FHIR API",     bg:"linear-gradient(135deg,#1a0a1e,#2d1040,#1a0d30)", accent:"rgba(123,94,167,.07)", col:"half" },
  { label:"AI Tool",       title:"DocuAI Contract Parser",   tech:"Python · LangChain · FastAPI · OpenAI",  bg:"linear-gradient(135deg,#1a1000,#2d2000,#1a1500)", accent:"rgba(255,160,0,.04)", col:"half" },
];

const Portfolio = () => (
  <section id="work" className="bg-bg2" style={{ padding:"7rem 5%", position:"relative" }}>
    <style>{`
      .bento { display:grid; grid-template-columns:repeat(12,1fr); grid-auto-rows:200px; gap:1rem; }
      .card-lg { grid-column:span 12; grid-row:span 2; }
      .card-md { grid-column:span 12; grid-row:span 2; }
      .card-hf { grid-column:span 12; grid-row:span 2; }
      @media(min-width:768px){
        .card-lg { grid-column:span 7; }
        .card-md { grid-column:span 5; }
        .card-hf { grid-column:span 6; }
      }
      .work-card .card-arrow { opacity:0; transition:opacity 0.3s; }
      .work-card .card-content { transform:translateY(8px); transition:transform 0.3s; }
      .work-card:hover { transform:scale(1.01); border-color:rgba(0,245,160,.3) !important; }
      .work-card:hover .card-arrow { opacity:1; }
      .work-card:hover .card-content { transform:translateY(0); }
    `}</style>

    <div className="section-label reveal">Featured Work</div>
    <h2 className="font-syne reveal reveal-delay-1" style={{ fontWeight:800, fontSize:"clamp(2rem,4vw,3.2rem)", lineHeight:1.1, letterSpacing:"-0.03em", color:"#f0f0f8", marginBottom:"1rem" }}>
      Things We've Built<br />That Actually Work
    </h2>
    <p className="reveal reveal-delay-2" style={{ color:"rgba(240,240,248,0.45)", fontSize:"1.05rem", lineHeight:1.7, maxWidth:520, marginBottom:"3rem" }}>
      Real projects. Real clients. Real results.
    </p>

    <div className="bento">
      {projects.map((p, i) => (
        <div key={p.title}
          className={`work-card reveal reveal-delay-${i} card-${p.col === "large" ? "lg" : p.col === "medium" ? "md" : "hf"}`}
          style={{ position:"relative", borderRadius:16, overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)", background:p.bg, transition:"transform 0.3s, border-color 0.3s", cursor:"none" }}
        >
          {/* Subtle grid overlay */}
          <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${p.accent} 1px,transparent 1px),linear-gradient(90deg,${p.accent} 1px,transparent 1px)`, backgroundSize:"30px 30px", pointerEvents:"none" }} />
          {/* Dark gradient to bottom */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(5,5,8,.95) 0%, rgba(5,5,8,.35) 50%, transparent 100%)" }} />
          {/* Arrow badge */}
          <div className="card-arrow" style={{ position:"absolute", top:20, right:20, width:36, height:36, borderRadius:"50%", background:"rgba(0,245,160,.1)", border:"1px solid rgba(0,245,160,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.9rem", color:"#f0f0f8" }}>↗</div>
          {/* Content */}
          <div className="card-content" style={{ position:"absolute", bottom:0, left:0, right:0, padding:"1.75rem" }}>
            <div style={{ fontSize:"0.7rem", textTransform:"uppercase", letterSpacing:"0.1em", color:"#00f5a0", fontWeight:600, marginBottom:"0.4rem" }}>{p.label}</div>
            <div className="font-syne" style={{ fontWeight:700, fontSize:"1.1rem", color:"#f0f0f8", marginBottom:"0.3rem" }}>{p.title}</div>
            <div style={{ color:"rgba(240,240,248,0.45)", fontSize:"0.8rem" }}>{p.tech}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
