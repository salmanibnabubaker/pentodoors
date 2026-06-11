import Image from "next/image";
import Button from "../shared/Button";

export default function ProductsHero() {
  return (
    <section className="pt-36 pb-24">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
              PRODUCTS
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Explore Our Product Collection
            </h1>

            <p className="text-lg text-neutral-600 mb-8">
              Premium doors, windows and frames designed
              to combine durability, functionality and
              modern aesthetics.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact">
                Request a Quote
              </Button>

              <Button
                href="https://wa.me/919846083216"
                variant="secondary"
              >
                WhatsApp Inquiry
              </Button>
            </div>

          </div>

          <Image
            src="/products/hero.png"
            alt="Products"
            width={1200}
            height={900}
            className="rounded-[32px]"
          />

        </div>

      </div>
    </section>
  );
}