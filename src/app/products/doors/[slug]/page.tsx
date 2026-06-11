import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProductBreadcrumb from "@/components/product-detail/ProductBreadcrumb";
import ProductGallery from "@/components/product-detail/ProductGallery";
import ProductHero from "@/components/product-detail/ProductHero";

import ProductSpecifications from "@/components/product-detail/ProductSpecifications";
import ProductFeatures from "@/components/product-detail/ProductFeatures";
import ProductApplications from "@/components/product-detail/ProductApplications";
import ProductBenefits from "@/components/product-detail/ProductBenefits";
import ProductOptions from "@/components/product-detail/ProductOptions";
import ProductBrochure from "@/components/product-detail/ProductBrochure";

import ProductInquiry from "@/components/product-detail/ProductInquiry";
import RelatedProducts from "@/components/product-detail/RelatedProducts";

import ProductTestimonials from "@/components/product-detail/ProductTestimonials";
import ProductFAQ from "@/components/product-detail/ProductFAQ";
import ProductSEOContent from "@/components/product-detail/ProductSEOContent";

import ProductFinalCTA from "@/components/product-detail/ProductFinalCTA";
import MobileStickyBar from "@/components/product-detail/MobileStickyBar";

import { doorProducts } from "@/data/door-products";
import { getRelatedProducts } from "@/lib/getRelatedProducts";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = doorProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(
    product,
    doorProducts
  );

  return (
    <>
      <Navbar />

      <main className="pt-8 pb-24 md:pb-0">

        <div className="container-custom pt-8">

          <ProductBreadcrumb
            category="Doors"
            productName={product.name}
          />

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Sticky Gallery */}
            <div>
              <ProductGallery
                gallery={product.gallery}
                name={product.name}
              />
            </div>

            {/* Scrolling Product Information */}
            <div className="space-y-8">

              <ProductHero
                name={product.name}
                category={product.category}
                badge={product.badge}
                shortDescription={product.shortDescription}
                features={product.features}
                whatsappMessage={product.whatsappMessage}
              />

              <ProductSpecifications
                specifications={product.specifications}
              />

              <ProductApplications
                applications={product.applications}
              />

              <ProductOptions
                options={product.options}
              />

            </div>

          </div>

        </div>

        <RelatedProducts
          products={relatedProducts}
          basePath="/products/doors"
        />

        <ProductTestimonials />

        <ProductSEOContent
          seoContent={product.seoContent}
        />

        <ProductFAQ />

        <ProductFinalCTA
          productName={product.name}
          whatsappMessage={product.whatsappMessage}
        />

      </main>

      <Footer />

      <MobileStickyBar
        whatsappMessage={product.whatsappMessage}
      />
    </>
  );
}