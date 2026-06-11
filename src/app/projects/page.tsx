import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsIntro from "@/components/projects/ProjectsIntro";
import ProjectFilters from "@/components/projects/ProjectFilters";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import BeforeAfter from "@/components/projects/BeforeAfter";
import ProductApplications from "@/components/projects/ProductApplications";
import WhyProjectsMatter from "@/components/projects/WhyProjectsMatter";
import Testimonials from "@/components/projects/Testimonials";
import ProjectStats from "@/components/projects/ProjectStats";
import InspirationSection from "@/components/projects/InspirationSection";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Gallery & Projects | Pentodoors & Frames",

  description:
    "Explore completed residential, villa, apartment, commercial, and renovation projects featuring premium doors, windows, and frames from Pentodoors & Frames.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <ProjectsHero />

      <ProjectsIntro />

      <ProjectFilters />

      <FeaturedProjects />

      <ProjectsGrid />

      <BeforeAfter />

      <ProductApplications />

      <WhyProjectsMatter />

      <Testimonials />

      <ProjectStats />

      <InspirationSection />

      <FAQ />

      <ProjectsCTA />

      <CTA />

      <Footer />
    </>
  );
}