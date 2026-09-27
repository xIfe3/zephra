import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Proof from "@/components/Proof";
import Testimonials from "@/components/Testimonials";
import Studio from "@/components/Studio";
import Founder from "@/components/Founder";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hook — promise, proof, product screens */}
        <Hero />
        <Marquee />
        {/* 2. Connect — why we exist */}
        <Manifesto />
        {/* 3. Show — the work speaks first */}
        <Work />
        {/* 4. Explain — what we do and how */}
        <Services />
        <Process />
        {/* 5. Reassure — numbers, reasons, voices */}
        <Proof />
        <Testimonials />
        {/* 6. Humanise — the people behind it */}
        <Studio />
        <Founder />
        {/* 7. Remove doubt, then ask */}
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
