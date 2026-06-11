import Button from "../shared/Button";

interface ProductFinalCTAProps {
  productName: string;
  whatsappMessage: string;
}

export default function ProductFinalCTA({
  productName,
  whatsappMessage,
}: ProductFinalCTAProps) {
  const whatsappUrl =
    `https://wa.me/919846083216?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Ready To Get Started?
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Find the Perfect Solution
            for Your Project
          </h2>

          <p className="text-lg text-neutral-300 mb-10">
            Interested in {productName}? Our team can help
            you choose the right product, discuss
            customization options, and provide a
            personalized quotation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Button href={whatsappUrl}>
              WhatsApp Inquiry
            </Button>

            <Button
              href="/contact"
              variant="secondary"
            >
              Request Quote
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