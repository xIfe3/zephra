"use client";

const steps = [
  { num:"01", title:"Discovery & Planning",    text:"We dive deep into your goals, users, and constraints. Then we define scope, tech stack, and a clear timeline before a single line of code is written." },
  { num:"02", title:"Design & Architecture",   text:"Wireframes, component systems, and infrastructure planning. You see exactly what you're getting before we build it." },
  { num:"03", title:"Development & Testing",   text:"Agile sprints with weekly check-ins. Clean, documented code with thorough testing at every stage. You're never in the dark." },
  { num:"04", title:"Launch & Handoff",        text:"Smooth deployment, full documentation, and a handoff that actually makes sense. Plus ongoing support so nothing breaks silently." },
];

const Process = () => (
  <section id="process" className="bg-bg" style={{ padding:"7rem 5%", position:"relative" }}>
    <style>{`
      .process-grid { display:grid; grid-template-columns:1fr; gap:4rem; align-items:center; }
      @media(min-width:1024px){ .process-grid { grid-template-columns:1fr 1fr; gap:6rem; } }
      .process-orbital { display:none; }
      @media(min-width:1024px){ .process-orbital { display:flex; align-items:center; justify-content:center; } }
    `}</style>
    <div className="process-grid">
      {/* Steps column */}
      <div>
        <div className="section-label reveal">How It Works</div>
        <h2 className="font-syne reveal reveal-delay-1" style={{ fontWeight:800, fontSize:"clamp(2rem,4vw,3.2rem)", lineHeight:1.1, letterSpacing:"-0.03em", color:"#f0f0f8", marginBottom:"1rem" }}>
          Our Process is<br />Built to Ship Fast
        </h2>
        <p className="reveal reveal-delay-2" style={{ color:"rgba(240,240,248,0.45)", fontSize:"1.05rem", lineHeight:1.7, maxWidth:480, marginBottom:"2.5rem" }}>
          No endless back-and-forths. No scope creep. Just a clean, structured process that gets your product live.
        </p>
        {steps.map((step, i) => (
          <div key={step.num} className={`reveal reveal-delay-${i}`}
            style={{ display:"flex", gap:"1.5rem", padding:"1.75rem 0", borderBottom: i < steps.length-1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
            onMouseEnter={e => {
              const num = e.currentTarget.querySelector(".step-num") as HTMLElement;
              const title = e.currentTarget.querySelector(".step-title") as HTMLElement;
              if (num) num.style.color = "rgba(0,245,160,.25)";
              if (title) title.style.color = "#00f5a0";
            }}
            onMouseLeave={e => {
              const num = e.currentTarget.querySelector(".step-num") as HTMLElement;
              const title = e.currentTarget.querySelector(".step-title") as HTMLElement;
              if (num) num.style.color = "rgba(255,255,255,0.08)";
              if (title) title.style.color = "#f0f0f8";
            }}
          >
            <div className="step-num font-syne" style={{ fontWeight:800, fontSize:"2.5rem", color:"rgba(255,255,255,0.08)", minWidth:56, lineHeight:1, transition:"color 0.3s" }}>{step.num}</div>
            <div>
              <div className="step-title font-syne" style={{ fontWeight:700, fontSize:"1.05rem", color:"#f0f0f8", marginBottom:"0.4rem", transition:"color 0.3s" }}>{step.title}</div>
              <p style={{ color:"rgba(240,240,248,0.45)", fontSize:"0.875rem", lineHeight:1.7 }}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Orbital visual */}
      <div className="process-orbital reveal">
        <div style={{ position:"relative", width:380, height:380 }}>
          <div className="orbit orbit-1">
            <div style={{ position:"absolute", width:10, height:10, borderRadius:"50%", background:"#00f5a0", boxShadow:"0 0 16px #00f5a0", top:-5, left:"50%", transform:"translateX(-50%)" }} />
          </div>
          <div className="orbit orbit-2">
            <div style={{ position:"absolute", width:10, height:10, borderRadius:"50%", background:"#00c8ff", boxShadow:"0 0 16px #00c8ff", top:-5, left:"50%", transform:"translateX(-50%)" }} />
          </div>
          <div className="orbit orbit-3">
            <div style={{ position:"absolute", width:10, height:10, borderRadius:"50%", background:"#7b5ea7", boxShadow:"0 0 16px #7b5ea7", top:-5, left:"50%", transform:"translateX(-50%)" }} />
          </div>
          <div className="font-syne" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:100, height:100, borderRadius:"50%", background:"radial-gradient(circle, rgba(0,245,160,.25), transparent 70%)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:"0.875rem", color:"#00f5a0", letterSpacing:"0.06em", textAlign:"center" }}>
            ZEPHRA
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Process;
