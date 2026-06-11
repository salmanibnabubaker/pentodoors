import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactIntro from "@/components/contact/ContactIntro";
import QuickContactOptions from "@/components/contact/QuickContactOptions";
import ContactInformation from "@/components/contact/ContactInformation";
import GoogleMapSection from "@/components/contact/GoogleMapSection";
import GeneralInquiryForm from "@/components/contact/GeneralInquiryForm";
import ProductInquiryForm from "@/components/contact/ProductInquiryForm";
import RequestQuoteForm from "@/components/contact/RequestQuoteForm";
import BulkOrderSection from "@/components/contact/BulkOrderSection";
import DealerInquirySection from "@/components/contact/DealerInquirySection";
import ServiceAreas from "@/components/contact/ServiceAreas";
import WhyContactUs from "@/components/contact/WhyContactUs";
import WhatsAppCTA from "@/components/contact/WhatsAppCTA";
import FinalCTA from "@/components/contact/FinalCTA";

import FAQ from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "Contact Us | Pentodoors & Frames",
  description:
    "Get in touch with Pentodoors & Frames for doors, windows, frames, quotations, bulk orders, dealer inquiries, and project consultations across Kerala.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <ContactHero />
      <ContactIntro />
      <QuickContactOptions />
      <ContactInformation />
      <GoogleMapSection />

      <GeneralInquiryForm />
      <ProductInquiryForm />
      <RequestQuoteForm />

      <BulkOrderSection />
      <DealerInquirySection />

      <ServiceAreas />
      <WhyContactUs />

      <FAQ />

      <WhatsAppCTA />
      <FinalCTA />

      <Footer />
    </>
  );
}