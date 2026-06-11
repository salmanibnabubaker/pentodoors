import Button from "../shared/Button";

export default function ContactHero() {
  return (
    <section className="pt-36 pb-24">

      <div className="container-custom">

        <div className="max-w-4xl">

          <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
            CONTACT US
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Let's Discuss Your Project
          </h1>

          <p className="text-xl text-neutral-600 mb-6">
            Whether you're building a new home,
            renovating an existing property,
            or planning a commercial project,
            our team is ready to help.
          </p>

          <p className="text-neutral-600 text-lg mb-10">
            Get expert guidance, product recommendations,
            and personalized quotations for doors,
            windows, and frames.
          </p>

          <div className="flex flex-wrap gap-4">

            <Button
              href="https://wa.me/919846083216"
            >
              WhatsApp Inquiry
            </Button>

            <Button
              href="tel:+919846083216"
              variant="secondary"
            >
              Call Now
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}