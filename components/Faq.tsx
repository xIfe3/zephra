import { Plus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { faqs, site } from "@/data/site";

/** Native <details> keeps answers in the HTML for search engines (and FAQPage schema in layout). */
const Faq = () => (
  <section id="faq" className="section">
    <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <Reveal>
          <span className="eyebrow">Questions</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="h-section mt-6 text-bone">
            Good questions, <em className="text-gradient">straight answers.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="lede mt-6 max-w-sm">
            Something else on your mind? Email{" "}
            <a href={`mailto:${site.email}`} className="link-underline text-copper-2">
              {site.email}
            </a>{" "}
            — a human replies within 24 hours.
          </p>
        </Reveal>
      </div>

      <div className="border-t hairline">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <details className="faq group border-b hairline" open={i === 0}>
              <summary className="flex items-center justify-between gap-6 py-7 text-left">
                <h3 className="font-display text-[clamp(1.4rem,2.2vw,1.9rem)] leading-tight text-bone transition-colors group-hover:text-copper-2">
                  {f.q}
                </h3>
                <span className="faq-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-copper-2">
                  <Plus size={18} />
                </span>
              </summary>
              <p className="max-w-2xl pb-8 text-mute">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
