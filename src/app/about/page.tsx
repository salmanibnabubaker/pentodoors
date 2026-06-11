import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import WhyWPC from "@/components/about/WhyWPC";
import Offerings from "@/components/about/Offerings";
import FutureExpansion from "@/components/about/FutureExpansion";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About Pentodoors & Frames",
  description:
    "Learn about Pentodoors & Frames, our mission, vision and commitment to premium WPC doors, windows and frames.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <AboutSection
        title="Building Spaces That Last"
        image="/about/company-story.jpg"
        content="Pentodoors & Frames was founded with a simple vision: to provide high-quality, durable and aesthetically refined building solutions that enhance modern living."
      />

      <AboutSection
        title="Our Journey"
        image="/about/journey.jpg"
        reverse
        content="Recognizing the demand for products that could withstand Kerala's climate while maintaining beauty and durability, Pentodoors & Frames focused on bringing innovative WPC solutions to the market."
      />

      <MissionVision />

      <Values />

      <WhyWPC />

      <Offerings />

      <FutureExpansion />

      <CTA />

      <Footer />
    </>
  );
}