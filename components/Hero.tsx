const Hero = () => {
  return (
    <section id="hero" className="bg-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "140px 5% 80px", position: "relative", overflow: "hidden" }}>
      {/* Orbs */}
      <div className="anim-float1" style={{ position:"absolute", width:700, height:700, top:-200, right:-200, background:"radial-gradient(circle, rgba(0,245,160,.12), transparent 70%)", filter:"blur(120px)", borderRadius:"50%", pointerEvents:"none" }} />
      <div className="anim-float2" style={{ position:"absolute", width:500, height:500, bottom:-100, left:-100, background:"radial-gradient(circle, rgba(0,200,255,.08), transparent 70%)", filter:"blur(120px)", borderRadius:"50%", pointerEvents:"none" }} />
      <div className="anim-float3" style={{ position:"absolute", width:300, height:300, top:"40%", left:"40%", background:"radial-gradient(circle, rgba(123,94,167,.1), transparent 70%)", filter:"blur(120px)", borderRadius:"50%", pointerEvents:"none" }} />
      <div className="grid-bg" />

      <div style={{ position:"relative", zIndex:2, width:"100%", maxWidth:860 }}>
        {/* Badge */}
        <div className="anim-fadeup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(0,245,160,.08)", border:"1px solid rgba(0,245,160,.2)", borderRadius:"100px", padding:"5px 14px", fontSize:"0.75rem", fontWeight:500, color:"#00f5a0", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:"1.75rem" }}>
          <span className="anim-pulse-fast" style={{ width:6, height:6, borderRadius:"50%", background:"#00f5a0", display:"inline-block" }} />
          Available for Projects in 2026
        </div>

        {/* Headline */}
        <h1 className="font-syne anim-fadeup-1" style={{ fontWeight:800, fontSize:"clamp(2.8rem, 6.5vw, 6rem)", lineHeight:1.02, letterSpacing:"-0.04em", color:"#f0f0f8", marginBottom:"1.5rem" }}>
          We Build Software
          <br />That <span className="gradient-text">Moves</span> Your
          <br />Business Forward
        </h1>

        {/* Sub */}
        <p className="anim-fadeup-2" style={{ fontSize:"clamp(1rem, 1.6vw, 1.15rem)", color:"rgba(240,240,248,0.45)", maxWidth:540, marginBottom:"2.5rem", lineHeight:1.75 }}>
          From sleek web apps to complex backend systems — we craft fast, scalable, and beautiful digital products that your clients can't ignore.
        </p>

        {/* CTAs */}
        <div className="anim-fadeup-3" style={{ display:"flex", flexWrap:"wrap", gap:"1rem", marginBottom:"0" }}>
          <a href="#contact" className="btn-primary">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#portfolio" className="btn-ghost">
            View Our Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9l6 6M15 9l-6 6"/></svg>
          </a>
        </div>

        {/* Stats */}
        <div className="anim-fadeup-4" style={{ display:"flex", flexWrap:"wrap", gap:"2.5rem", marginTop:"4rem", paddingTop:"3rem", borderTop:"1px solid rgba(255,255,255,0.08)" }}>
          {[{ num:"60+", label:"Projects Shipped" }, { num:"4.9★", label:"Client Rating" }, { num:"3yr+", label:"In the Industry" }, { num:"100%", label:"On-time Delivery" }].map(({ num, label }) => (
            <div key={label}>
              <div className="font-syne gradient-text-white" style={{ fontWeight:800, fontSize:"2.2rem", lineHeight:1 }}>{num}</div>
              <div style={{ fontSize:"0.75rem", color:"rgba(240,240,248,0.45)", textTransform:"uppercase", letterSpacing:"0.06em", marginTop:"0.35rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
