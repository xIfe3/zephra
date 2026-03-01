import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Trust from "@/components/Trust";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Agency = () => {
  return (
    <div>
      {/* Custom cursor — fixed, sits above everything */}
      <Cursor />

      {/* Fixed top navigation */}
      <Header />

      {/* 1. Hero — first impression, CTA above the fold */}
      <Hero />

      {/* 2. Services — what we offer */}
      <Services />

      {/* 3. Process — how we work */}
      <Process />

      {/* 4. Portfolio — proof of work */}
      <Portfolio />

      {/* 5. Trust — stats & industry proof */}
      <Trust />

      {/* 6. Why Us — trust signals */}
      <WhyUs />

      {/* 6. Testimonials — social proof */}
      <Testimonials />

      {/* 7. About — who we are */}
      <About />

      {/* 8. CTA Band — conversion push before contact */}
      <CtaBand />

      {/* 9. Contact — the money page */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Agency;
