import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ImagePlus } from "lucide-react";

type PhotoSlotProps = {
  /** Path under /public, e.g. "/photos/team.jpg". Drop a file there and it appears — no code change. */
  src: string;
  alt: string;
  /** Shown on the placeholder so you know what photo belongs here. */
  hint: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Renders the photo if it exists in /public, otherwise an on-brand placeholder
 * that names the file it's waiting for. Checked at build/render time on the server.
 */
const PhotoSlot = ({ src, alt, hint, className = "", sizes = "(max-width: 768px) 100vw, 50vw", priority }: PhotoSlotProps) => {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  return (
    <div className={`relative overflow-hidden rounded-[28px] border hairline bg-panel ${className}`}>
      {exists ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 60% at 30% 20%, rgba(212,144,95,0.22), transparent 70%), radial-gradient(50% 60% at 80% 90%, rgba(157,180,211,0.18), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(243,238,231,1) 1px, transparent 1px), linear-gradient(90deg, rgba(243,238,231,1) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <ImagePlus className="relative text-copper-2" size={28} strokeWidth={1.4} />
          <p className="relative font-display text-2xl text-bone">{hint}</p>
          <p className="relative font-mono text-[0.7rem] tracking-[0.12em] text-mute uppercase">
            Add photo → public{src}
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoSlot;
