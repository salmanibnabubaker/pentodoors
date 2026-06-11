import Button from "../shared/Button";

export default function ProjectsCTA() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="rounded-[32px] border p-12 lg:p-16 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Let's Bring Your Vision to Life
          </h2>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-10">
            Whether you're planning a home, villa,
            apartment, renovation, or commercial project,
            Pentodoors & Frames can help you select the
            right doors, windows, and frames for your needs.
          </p>

          <p className="text-neutral-600 max-w-3xl mx-auto mb-12">
            Our team is ready to provide expert guidance,
            product recommendations, and personalized
            quotations tailored to your project requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Button href="/contact">
              Request a Quote
            </Button>

            <Button
              href="https://wa.me/919846083216"
              variant="secondary"
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