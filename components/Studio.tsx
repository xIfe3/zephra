import { Reveal } from "@/components/motion/Reveal";
import PhotoSlot from "@/components/ui/PhotoSlot";

const stack = [
  { label: "Engineering", items: ["React / Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"] },
  { label: "Mobile", items: ["React Native", "Flutter", "iOS", "Android"] },
  { label: "Cloud", items: ["AWS / GCP", "Docker", "CI/CD", "Vercel"] },
  { label: "AI", items: ["OpenAI", "Claude", "LangChain", "RAG"] },
  { label: "Design", items: ["Figma", "Design systems", "Branding", "Shopify", "WordPress"] },
];

const values = [
  { word: "Clarity", line: "Plain language, written scope, no surprises." },
  { word: "Speed", line: "Weeks, not quarters. Momentum is a feature." },
  { word: "Craft", line: "Details users feel even when they can't name them." },
  { word: "Honesty", line: "We'll tell you when an idea needs rethinking." },
];

/** About the studio — told with photos of the real team at work. */
const Studio = () => (
  <section id="studio" className="section">
    <div className="wrap">
      <div className="grid gap-6 md:grid-cols-12 md:grid-rows-[auto_auto]">
        <Reveal className="md:col-span-7 md:row-span-2">
          <PhotoSlot
            src="/photos/studio-team.jpg"
            alt="The Zephra Studio team collaborating on a product build"
            hint="The team, mid-build"
            className="aspect-[4/5] md:aspect-auto md:h-full md:min-h-[38rem]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5">
          <span className="eyebrow">The studio</span>
          <h2 className="h-section mt-6 text-bone">
            Developers who <em className="text-gradient">actually care.</em>
          </h2>
          <div className="mt-6 space-y-4 text-mute">
            <p>
              Zephra was born out of frustration with agencies that overpromise, underdeliver and disappear after
              the invoice. We&apos;re a small, sharp team of engineers and designers who treat your product like it
              has our name on it — because it does.
            </p>
            <p>
              We work with startups, SMEs and growing businesses who want a real technical partner, not an
              order-taker. Based in Nigeria. Working with founders everywhere.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.18} className="md:col-span-5">
          <PhotoSlot
            src="/photos/studio-workspace.jpg"
            alt="Inside the Zephra Studio workspace"
            hint="Our workspace"
            className="aspect-[16/10]"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </Reveal>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border hairline bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <Reveal key={v.word} delay={i * 0.06} className="bg-night p-8">
            <p className="font-display text-4xl italic text-copper-2">{v.word}</p>
            <p className="mt-3 text-sm text-mute">{v.line}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 grid gap-8 border-t hairline pt-10 md:grid-cols-[0.3fr_1fr]">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-mute uppercase">Our toolkit</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((g) => (
              <div key={g.label}>
                <p className="text-sm font-semibold text-bone">{g.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-mute">{g.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Studio;
