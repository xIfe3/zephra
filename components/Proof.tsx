import { Reveal } from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import Spotlight from "@/components/motion/Spotlight";
import { proofStats, reasons } from "@/data/site";

/** Numbers + the reasons behind them. */
const Proof = () => (
  <section id="why" className="section">
    <div className="wrap">
      <Reveal>
        <span className="eyebrow">Why founders choose us</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="h-section mt-6 max-w-[16ch] text-bone">
          Built by founders. <em className="text-gradient">For founders.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-16 grid grid-cols-2 border-t hairline lg:grid-cols-4">
          {proofStats.map((s, i) => (
            <div
              key={s.label}
              className={`border-b hairline py-10 pr-6 ${i % 2 === 0 ? "" : "pl-6 border-l"} lg:border-b-0 ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <p className="font-display text-[clamp(3.2rem,7vw,6rem)] leading-none text-gradient">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-4 font-medium text-bone">{s.label}</p>
              <p className="mt-1 text-sm text-mute">{s.sub}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.07}>
            <Spotlight className="h-full p-8">
              <span className="font-mono text-xs text-copper">0{i + 1}</span>
              <h3 className="mt-6 font-display text-[1.75rem] leading-tight text-bone">{r.title}</h3>
              <p className="mt-3 text-[0.94rem] text-mute">{r.text}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Proof;
