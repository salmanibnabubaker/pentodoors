import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FramesHero from "@/components/frames/FramesHero";
import FramesIntro from "@/components/frames/FramesIntro";
import FrameCategories from "@/components/frames/FrameCategories";
import ShopByApplication from "@/components/frames/ShopByApplication";
import FeaturedFrameCollections from "@/components/frames/FeaturedFrameCollections";
import ProductFilters from "@/components/frames/ProductFilters";
import ProductGrid from "@/components/frames/ProductGrid";
import WPCBenefits from "@/components/frames/WPCBenefits";
import DownloadCatalog from "@/components/frames/DownloadCatalog";

import ProjectsPreview from "@/components/home/ProjectsPreview";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Premium Frames | Pentodoors & Frames",
  description:
    "Explore premium WPC frames, waterproof frames, door frames, and heavy-duty frame solutions.",
};

export default function FramesPage() {
  return (
    <>
      <Navbar />

      <FramesHero />
      <FramesIntro />
      <FrameCategories />
      <ShopByApplication />
      <FeaturedFrameCollections />
      <ProductFilters />
      <ProductGrid />
      <WPCBenefits />
      <ProjectsPreview />
      <FAQ />
      <DownloadCatalog />
      <CTA />

      <Footer />
    </>
  );
}