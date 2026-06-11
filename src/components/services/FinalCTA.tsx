import Button from "../shared/Button";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <div className="rounded-[32px] border p-12 lg:p-16 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Let's Build Better Spaces Together
          </h2>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-4">
            Premium products. Professional guidance.
            Reliable support.
          </p>

          <p className="text-neutral-600 max-w-3xl mx-auto mb-10">
            Partner with Pentodoors & Frames and create spaces that
            combine durability, functionality, and modern design.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Button href="/contact">
              Contact Us
            </Button>

            <Button
              href="/products"
              variant="secondary"
            >
              Explore Products
            </Button>

            <Button
              href="https://wa.me/919846083216"
              variant="secondary"
            >
              WhatsApp Inquiry
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}