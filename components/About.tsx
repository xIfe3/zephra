"use client";

const skills = ["React / Next.js","TypeScript","Node.js","Python","PostgreSQL","React Native","AWS / GCP","Docker","AI / LLMs","Figma"];

const About = () => (
  <section id="about" className="bg-bg" style={{ padding:"7rem 5%", position:"relative" }}>
    <style>{`
      .about-grid { display:grid; grid-template-columns:1fr; gap:4rem; align-items:center; }
      @media(min-width:1024px){ .about-grid { grid-template-columns:1fr 1fr; gap:6rem; } }
      .skill-chip { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.35rem 0.9rem; font-size:0.8rem; color:rgba(240,240,248,0.45); transition:border-color 0.3s, color 0.3s; cursor:default; }
      .skill-chip:hover { border-color:rgba(0,229,255,.3); color:#f0f0f8; }
    `}</style>

    <div className="about-grid">
      {/* Code card */}
      <div className="reveal" style={{ position:"relative", height:460 }}>
        <div style={{ position:"absolute", inset:0, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:24, overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 50% at 50% 20%, rgba(0,229,255,.07), transparent), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(0,200,255,.05), transparent)", pointerEvents:"none" }} />
          <div style={{ position:"relative", zIndex:2, fontFamily:"'Courier New', monospace", fontSize:"0.78rem", lineHeight:1.8, color:"rgba(240,240,248,0.6)", padding:"2rem", width:"100%" }}>
            <span style={{ color:"rgba(240,240,248,0.3)" }}>{'// Zephra — core principles'}</span><br />
            <span style={{ color:"#cc99cd" }}>const</span>{' '}<span style={{ color:"#6fb3d2" }}>zephra</span>{' = {'}<br />
            {'  '}mission:{' '}<span style={{ color:"#00e5ff" }}>"ship things that work"</span>,<br />
            {'  '}values:{' ['}
              <br />{'    '}<span style={{ color:"#00e5ff" }}>"clarity"</span>,
              <br />{'    '}<span style={{ color:"#00e5ff" }}>"speed"</span>,
              <br />{'    '}<span style={{ color:"#00e5ff" }}>"quality"</span>,
              <br />{'    '}<span style={{ color:"#00e5ff" }}>"honesty"</span>
            <br />{'  '}{'],'}<br />
            {'  '}stack:{' '}<span style={{ color:"#00e5ff" }}>"whatever the job needs"</span>,<br />
            {'  '}deliveryMode:{' '}<span style={{ color:"#00e5ff" }}>"relentless"</span>,<br />
            {'  '}bullshit:{' '}<span style={{ color:"#00e5ff" }}>false</span>,<br />
            {'};'}<br /><br />
            <span style={{ color:"#cc99cd" }}>export default</span>{' '}<span style={{ color:"#6fb3d2" }}>zephra</span>;
          </div>
        </div>

        {/* Floating badges */}
        <div style={{ position:"absolute", top:32, left:-24, display:"flex", alignItems:"center", gap:10, background:"rgba(5,5,8,.95)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:14, padding:"0.7rem 1.25rem", backdropFilter:"blur(12px)", boxShadow:"0 8px 32px rgba(0,0,0,.5)", fontSize:"0.82rem", fontWeight:500, color:"#f0f0f8", whiteSpace:"nowrap" }}>
          <span className="anim-pulse" style={{ width:8, height:8, borderRadius:"50%", background:"#00e5ff", boxShadow:"0 0 8px #00e5ff", flexShrink:0 }} />
          Currently Accepting Projects
        </div>
        <div style={{ position:"absolute", bottom:32, right:-24, display:"flex", alignItems:"center", gap:10, background:"rgba(5,5,8,.95)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:14, padding:"0.7rem 1.25rem", backdropFilter:"blur(12px)", boxShadow:"0 8px 32px rgba(0,0,0,.5)", fontSize:"0.82rem", fontWeight:500, color:"#f0f0f8", whiteSpace:"nowrap" }}>
          <span style={{ width:8, height:8, borderRadius:"50%", background:"#00c8ff", boxShadow:"0 0 8px #00c8ff", flexShrink:0 }} />
          60+ Products Shipped
        </div>
      </div>

      {/* Text */}
      <div className="reveal reveal-delay-1">
        <div className="section-label">About Us</div>
        <h2 className="font-syne" style={{ fontWeight:800, fontSize:"clamp(2rem,4vw,3.2rem)", lineHeight:1.1, letterSpacing:"-0.03em", color:"#f0f0f8", marginBottom:"1.5rem" }}>
          We're Developers<br />Who Actually Care
        </h2>
        <div style={{ display:"flex", flexDirection:"column", gap:"1rem", marginBottom:"2rem" }}>
          <p style={{ color:"rgba(240,240,248,0.45)", lineHeight:1.8, fontSize:"1rem" }}>Zephra Studio was built out of frustration with agencies that overpromise, underdeliver, and disappear after the invoice. We're a small, sharp team of engineers and designers who care deeply about the products we build.</p>
          <p style={{ color:"rgba(240,240,248,0.45)", lineHeight:1.8, fontSize:"1rem" }}>We work with startups, SMEs, and growing businesses who need real technical partners — not order-takers. If you have a problem that needs a software solution, we'll help you find the right one and build it without wasting your time or money.</p>
          <p style={{ color:"rgba(240,240,248,0.45)", lineHeight:1.8, fontSize:"1rem" }}>Based in Nigeria. Working globally. Built on honesty, speed, and craft.</p>
        </div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
          {skills.map(skill => <span key={skill} className="skill-chip">{skill}</span>)}
        </div>
      </div>
    </div>
  </section>
);

export default About;
