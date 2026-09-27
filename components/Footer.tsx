import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";
import { nav, site } from "@/data/site";
import { projects } from "@/data/projects";

const socialIcons = { X: FaXTwitter, LinkedIn: FaLinkedinIn, GitHub: FaGithub, Instagram: FaInstagram } as const;

const Footer = () => (
  <footer className="relative overflow-hidden border-t hairline pt-20">
    <div className="wrap">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Image src="/logo-wide.png" alt={site.name} width={700} height={162} className="h-9 w-auto" />
          <p className="mt-6 font-display text-2xl italic leading-snug text-bone">
            Building products founders are proud to ship.
          </p>
          <Link href="/#contact" className="btn btn-copper mt-8">
            Book a free scope call
          </Link>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[0.68rem] tracking-[0.16em] text-mute uppercase">Studio</p>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-underline text-bone/85 hover:text-bone">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#contact" className="link-underline text-bone/85 hover:text-bone">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[0.68rem] tracking-[0.16em] text-mute uppercase">Case studies</p>
          <ul className="mt-5 space-y-3">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="link-underline text-bone/85 hover:text-bone">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[0.68rem] tracking-[0.16em] text-mute uppercase">Say hello</p>
          <ul className="mt-5 space-y-3 text-bone/85">
            <li>
              <a href={`mailto:${site.email}`} className="link-underline hover:text-bone">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-bone">
                WhatsApp
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-2">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.name as keyof typeof socialIcons];
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Zephra on ${s.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-mute transition-colors hover:border-copper hover:text-copper-2"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col justify-between gap-3 border-t hairline py-8 text-sm text-dim sm:flex-row">
        <p>© {new Date().getFullYear()} Zephra Studio. All rights reserved.</p>
        <p>Designed &amp; built in Nigeria — for founders everywhere.</p>
      </div>
    </div>

    {/* Solid fill + a gradient overlay: far cheaper to paint than background-clip:text at this size */}
    <div aria-hidden className="pointer-events-none relative select-none">
      <p className="-mb-[0.22em] text-center font-display text-[25vw] leading-none tracking-[-0.04em] text-copper/25">
        Zephra
      </p>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-night/60 to-night" />
    </div>
  </footer>
);

export default Footer;
