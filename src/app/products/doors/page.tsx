import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DoorsHero from "@/components/doors/DoorsHero";
import DoorsIntro from "@/components/doors/DoorsIntro";
import DoorCategories from "@/components/doors/DoorCategories";
import ShopByApplication from "@/components/doors/ShopByApplication";
import FeaturedDoorCollections from "@/components/doors/FeaturedDoorCollections";
import ProductFilters from "@/components/doors/ProductFilters";
import ProductGrid from "@/components/doors/ProductGrid";
import WPCBenefits from "@/components/doors/WPCBenefits";
import DownloadCatalog from "@/components/doors/DownloadCatalog";

import ProjectsPreview from "@/components/home/ProjectsPreview";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Premium Doors | Pentodoors & Frames",
  description:
    "Explore premium WPC doors, designer doors, flush doors and laminated doors.",
};

export default function DoorsPage() {
  return (
    <>
      <Navbar />

      <DoorsHero />
      <DoorsIntro />
      <DoorCategories />
      <ShopByApplication />
      <FeaturedDoorCollections />
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