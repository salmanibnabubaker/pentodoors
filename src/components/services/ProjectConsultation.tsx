import Button from "../shared/Button";

export default function ProjectConsultation() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <div className="rounded-[32px] border p-12 lg:p-16">

          <h2 className="text-5xl font-bold mb-6">
            Planning a New Project?
          </h2>

          <p className="text-lg text-neutral-600 mb-10 max-w-3xl">
            Whether you're constructing a home, renovating a property,
            or developing a commercial building, our team can help
            identify the most suitable solutions for your project.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10">

            <div className="p-5">
              ✓ Product Selection
            </div>

            <div className="p-5">
              ✓ Design Requirements
            </div>

            <div className="p-5">
              ✓ Budget Planning
            </div>

            <div className="p-5">
              ✓ Technical Considerations
            </div>

          </div>

          <div className="flex flex-wrap gap-4">

            <Button href="/contact">
              Book Consultation
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