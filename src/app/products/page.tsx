import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProductsHero from "@/components/products/ProductsHero";
import ProductCategories from "@/components/products/ProductCategories";
import FeaturedCollections from "@/components/products/FeaturedCollections";

import ProjectsPreview from "@/components/home/ProjectsPreview";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Products | Pentodoors & Frames",
  description:
    "Explore premium doors, windows and frames designed for modern homes and commercial projects.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <ProductsHero />

      <ProductCategories />

      <FeaturedCollections />

      <ProjectsPreview />

      <FAQ />

      <CTA />

      <Footer />
    </>
  );
}