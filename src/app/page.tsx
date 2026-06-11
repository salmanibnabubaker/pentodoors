import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Premium WPC Doors, Windows & Frames | Pentodoors",

  description:
    "Discover premium waterproof WPC doors, windows and frames built for modern homes and commercial projects.",

  keywords: [
    "WPC Doors",
    "WPC Windows",
    "WPC Frames",
    "Doors Kerala",
    "Windows Kerala",
  ],
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Applications from "@/components/home/Applications";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />
      <AboutPreview />
      <ProductCategories />
      <WhyChooseUs />
      <FeaturedProducts />
      <Applications />
      <ProjectsPreview />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />

      <Footer />

      <FloatingWhatsApp />
      <MobileStickyCTA />
    </>
  );
}