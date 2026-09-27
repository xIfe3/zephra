import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/data/site";

const socials = [
  { name: "X / Twitter", url: "https://x.com/ifeanyicodes_", Icon: FaXTwitter },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ifeanyichukwu-onyekwelu/", Icon: FaLinkedinIn },
  { name: "GitHub", url: "https://github.com/xIfe3", Icon: FaGithub },
  { name: "Instagram", url: "https://instagram.com/tech__doctor", Icon: FaInstagram },
];

/** A personal note from the founder — the human handshake before the contact form. */
const Founder = () => (
  <section id="founder" className="section overflow-hidden">
    <div className="wrap grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
      <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div aria-hidden className="orb -inset-20 -z-10 text-copper/35" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10">
          <Image
            src="/founder.jpeg"
            alt={`${site.founder.name}, founder of Zephra Studio`}
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night via-night/40 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
            <div>
              <p className="font-display text-3xl text-bone">{site.founder.name}</p>
              <p className="text-sm text-mute">{site.founder.role}</p>
            </div>
            <span className="chip !bg-night/80">5+ yrs building</span>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <span className="eyebrow">A note from the founder</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 font-display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] text-bone">
            &ldquo;When you work with Zephra, you work with <em className="text-gradient">me</em> — from the first
            call to launch day and beyond.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-8 space-y-4 text-mute">
            <p>
              I&apos;ve spent over five years building web and mobile products across fintech, edtech and SaaS. I
              started Zephra because I kept meeting founders with great ideas who&apos;d been burned by slow,
              vague, expensive development.
            </p>
            <p>
              So we do it differently: a straight conversation, a fixed price, and a product in your hands in two
              weeks. No hand-offs to a junior developer after the sales call. If I can&apos;t help you, I&apos;ll
              tell you who can.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 font-display text-4xl italic text-copper-2" aria-hidden>
            Ifeanyi
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={site.founder.portfolio} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Personal portfolio <ArrowUpRight size={16} />
            </a>
            <div className="flex gap-2">
              {socials.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.founder.name} on ${name}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-mute transition-colors hover:border-copper hover:text-copper-2"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Founder;
