"use client";

import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import WhyMOA from "@/components/sections/WhyMOA";
import RetailSection from "@/components/sections/RetailSection";
import LuxurySection from "@/components/sections/LuxurySection";
import DiningSection from "@/components/sections/DiningSection";
import AttractionsSection from "@/components/sections/AttractionsSection";
import EventsSection from "@/components/sections/EventsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WhyMOA />
        <RetailSection />
        <LuxurySection />
        <DiningSection />
        <AttractionsSection />
        <EventsSection />
        <CTASection />
      </main>
    </>
  );
}
