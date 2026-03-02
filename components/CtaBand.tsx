"use client";

import { useState } from "react";
import EmailModal from "./EmailModal";

const CtaBand = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="cta-band" style={{ padding:"6rem 5%", position:"relative", textAlign:"center", background:"linear-gradient(135deg, rgba(0,245,160,.08), rgba(0,200,255,.04))", borderTop:"1px solid rgba(255,255,255,0.08)", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
        <div className="section-label reveal" style={{ justifyContent:"center" }}>Let&apos;s Build Something</div>
        <h2 className="font-syne reveal reveal-delay-1" style={{ fontWeight:800, fontSize:"clamp(2.5rem,5vw,4rem)", lineHeight:1.05, letterSpacing:"-0.04em", color:"#f0f0f8", marginBottom:"1rem" }}>
          Your Idea Deserves<br />
          <span className="gradient-text">Real Execution.</span>
        </h2>
        <p className="reveal reveal-delay-2" style={{ color:"rgba(240,240,248,0.45)", fontSize:"1.05rem", maxWidth:480, margin:"0 auto 2.5rem", lineHeight:1.7 }}>
          Stop leaving your product on the drawing board. Let&apos;s talk, define scope, and start building within the week.
        </p>
        <div className="reveal reveal-delay-3" style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
          <a href="#contact" className="btn-primary" style={{ fontSize:"1.05rem", padding:"1rem 2.5rem" }}>
            Book a Free Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button onClick={() => setModalOpen(true)} className="btn-ghost" style={{ fontSize:"1.05rem", padding:"1rem 2.5rem" }}>
            Send an Email
          </button>
        </div>
      </section>

      <EmailModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default CtaBand;
