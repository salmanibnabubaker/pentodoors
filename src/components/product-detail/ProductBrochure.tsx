import Button from "../shared/Button";

interface ProductBrochureProps {
  brochure?: string;
}

export default function ProductBrochure({
  brochure,
}: ProductBrochureProps) {
  if (!brochure) return null;

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">

        <div
          className="
            border
            rounded-[32px]
            bg-white
            p-10
            md:p-16
            text-center
          "
        >
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Product Documentation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Download Product Brochure
          </h2>

          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-10">
            Access detailed specifications, dimensions,
            finishes, and technical information for this
            product.
          </p>

          <Button href={brochure}>
            Download Brochure
          </Button>
        </div>

      </div>
    </section>
  );
}