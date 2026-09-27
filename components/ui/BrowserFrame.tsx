import Image from "next/image";

/** Product screenshot presented inside a minimal dark browser chrome. */
const BrowserFrame = ({
  src,
  alt,
  url,
  sizes = "(max-width: 768px) 100vw, 60vw",
  priority,
  className = "",
}: {
  src: string;
  alt: string;
  url?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) => (
  <div
    className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0d1119] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ${className}`}
  >
    <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
      {url && (
        <span className="ml-3 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[0.65rem] text-mute">
          {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </span>
      )}
    </div>
    {/* Matches the 1920×970 project screenshots so nothing is cropped */}
    <div className="relative aspect-[192/97] w-full">
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
    </div>
  </div>
);

export default BrowserFrame;
