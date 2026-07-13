import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OfferSection from "@/components/OfferSection";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Trust from "@/components/Trust";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Founder from "@/components/Founder";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Agency = () => {
  return (
    <div>
      {/* Fixed top navigation */}
      <Header />

      {/* 1. Hero — first impression, CTA above the fold */}
      <Hero />

      {/* 1.5. Offer Section — the 3-step journey */}
      <OfferSection />

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

      {/* 8. Founder — meet the person behind Zephra */}
      <Founder />

      {/* 9. CTA Band — conversion push before contact */}
      <CtaBand />

      {/* 9. Contact — the money page */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Agency;
