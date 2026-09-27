import { industries } from "@/data/site";

/** Slow-moving industries band — two rows travelling in opposite directions. */
const Marquee = () => {
  const row = [...industries, ...industries];
  return (
    <section aria-label="Industries we build for" className="marquee-host relative border-y hairline py-8">
      <p className="sr-only">Industries we build for: {industries.join(", ")}</p>
      <div aria-hidden className="mask-x overflow-hidden">
        <div className="marquee" style={{ ["--marquee-speed" as string]: "55s" }}>
          {row.map((name, i) => (
            <span key={i} className="flex items-center gap-10 pr-10 font-display text-[clamp(2rem,4.5vw,3.6rem)] text-bone/90">
              <span className={i % 2 ? "italic text-bone/35" : ""}>{name}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" className="text-copper" fill="currentColor">
                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
