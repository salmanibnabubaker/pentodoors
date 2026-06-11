import Button from "../shared/Button";

export default function FinalCTA() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <div className="rounded-[32px] bg-black text-white p-12 md:p-16">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[3px] text-neutral-400 mb-4">
              LET'S BUILD TOGETHER
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>

            <p className="text-xl text-neutral-300 mb-10">
              Whether you're looking for doors, windows,
              frames, or future interior solutions,
              Pentodoors & Frames is ready to help.
            </p>

            <p className="text-neutral-400 mb-12 max-w-3xl">
              Let's discuss your requirements and find
              the perfect solution for your residential,
              commercial, villa, apartment, or institutional project.
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

              <Button
                href="tel:+919846083216"
                variant="secondary"
              >
                Call Now
              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}