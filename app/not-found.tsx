import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden className="orb h-[36rem] w-[36rem] text-copper/20" />
      <p className="relative font-display text-[clamp(8rem,30vw,20rem)] leading-none text-gradient">404</p>
      <h1 className="relative mt-2 font-display text-4xl text-bone">This page wandered off.</h1>
      <p className="relative mt-4 max-w-md text-mute">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to something real.
      </p>
      <Link href="/" className="btn btn-copper relative mt-10">
        <ArrowLeft size={17} /> Back to home
      </Link>
    </main>
  );
}
