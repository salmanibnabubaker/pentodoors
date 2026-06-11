import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import OurServices from "@/components/services/OurServices";
import SolutionsByProjectType from "@/components/services/SolutionsByProjectType";
import WhyWorkWithUs from "@/components/services/WhyWorkWithUs";
import ServiceProcess from "@/components/services/ServiceProcess";
import WhoWeServe from "@/components/services/WhoWeServe";
import ProjectConsultation from "@/components/services/ProjectConsultation";
import Testimonials from "@/components/services/Testimonials";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import FutureServices from "@/components/services/FutureServices";
import LeadGeneration from "@/components/services/LeadGeneration";
import FinalCTA from "@/components/services/FinalCTA";

export const metadata: Metadata = {
  title: "Services | Pentodoors & Frames",
  description:
    "Professional consultation, product guidance, bulk supply support, and complete door, window, and frame solutions for residential and commercial projects across Kerala.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <ServicesHero />
      <ServicesIntro />
      <OurServices />
      <SolutionsByProjectType />
      <WhyWorkWithUs />
      <ServiceProcess />
      <WhoWeServe />
      <ProjectConsultation />
      <Testimonials />
      <ServicesFAQ />
      <FutureServices />
      <LeadGeneration />
      <FinalCTA />

      <Footer />
    </>
  );
}