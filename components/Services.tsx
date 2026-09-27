import { Rocket, Smartphone, Sparkles, ScanSearch, Plus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import Spotlight from "@/components/motion/Spotlight";
import { services, alsoServices } from "@/data/site";

const icons = { mvp: Rocket, mobile: Smartphone, ai: Sparkles, audit: ScanSearch } as const;

const Services = () => (
  <section id="services" className="section">
    <div className="wrap">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <Reveal>
            <span className="eyebrow">What we do</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h-section mt-6 text-bone">
              Everything a founder needs <em className="text-gradient">to launch.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <p className="lede max-w-md lg:ml-auto">
            We go deep on the things that get a startup to market fast. Everything else we do well, but these four
            are why founders call us.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = icons[s.key as keyof typeof icons];
          return (
            <Reveal key={s.key} delay={(i % 2) * 0.08}>
              <Spotlight className="group flex h-full flex-col overflow-hidden p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-copper/25 bg-gradient-to-br from-copper/20 to-transparent text-copper-2 transition-transform duration-700 ease-out-expo group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs text-dim">0{i + 1}</span>
                </div>
                <h3 className="mt-10 font-display text-[2.3rem] leading-none text-bone">{s.name}</h3>
                <p className="mt-4 max-w-md text-mute">{s.desc}</p>
                <div className="mt-8 flex flex-wrap gap-2 pt-2">
                  {s.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-4 flex flex-col gap-6 rounded-3xl border hairline p-8 sm:flex-row sm:items-center sm:p-10">
          <p className="shrink-0 font-display text-2xl text-bone">We also do</p>
          <ul className="flex flex-wrap gap-2">
            {alsoServices.map((s) => (
              <li key={s} className="chip !text-[0.82rem] !py-2 !px-4">
                <Plus size={12} className="text-copper" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Services;
