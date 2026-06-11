import Button from "../shared/Button";

export default function CTA() {
  return (
    <section className="py-32">

      <div className="container-custom">

        <div className="bg-black text-white rounded-[40px] p-12 md:p-20 text-center">

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Upgrade Your Space?
          </h2>

          <p className="text-neutral-300 max-w-2xl mx-auto mb-10">
            Discover premium doors, windows and frames built
            for modern living.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Button href="/contact">
              Request a Quote
            </Button>

            <Button href="https://wa.me/919846083216">
              WhatsApp Us
            </Button>

            <Button href="tel:+919846083216">
              Call Now
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}