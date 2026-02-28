import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import HeroContent from "@/components/sections/HeroContent";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PastProjects from "@/components/sections/PastProjects";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import GetInTouch from "@/components/sections/GetInTouch";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HeroContent />
        <WhoWeAre />
        <WhatWeOffer />
        <WhyChooseUs />
        <PastProjects />
        <Testimonials />
        <CallToAction />
        <GetInTouch />
      </main>
    </>
  );
}
