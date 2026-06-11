import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import WindowsHero from "@/components/windows/WindowsHero";
import WindowsIntro from "@/components/windows/WindowsIntro";
import WindowCategories from "@/components/windows/WindowsCategories";
import ShopByApplication from "@/components/windows/ShopByApplication";
import FeaturedWindowCollections from "@/components/windows/FeaturedWindowCollections";
import ProductFilters from "@/components/windows/ProductFilters";
import ProductGrid from "@/components/windows/ProductGrid";
import WPCBenefits from "@/components/windows/WPCBenefits";
import DownloadCatalog from "@/components/windows/DownloadCatalog";

import ProjectsPreview from "@/components/home/ProjectsPreview";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Premium Windows | Pentodoors & Frames",
  description:
    "Explore premium WPC windows, uPVC windows, sliding windows, casement windows and modern window systems.",
};

export default function WindowsPage() {
  return (
    <>
      <Navbar />

      <WindowsHero />
      <WindowsIntro />
      <WindowCategories />
      <ShopByApplication />
      <FeaturedWindowCollections />
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