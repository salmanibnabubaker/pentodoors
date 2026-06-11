import Button from "../shared/Button";

export default function LeadGeneration() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <div className="rounded-[32px] border p-12 lg:p-16 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-10">
            Our team is ready to help you choose the right products
            and solutions for your needs. Whether you're a homeowner,
            architect, builder, developer, or commercial client,
            we're here to provide expert guidance and reliable support.
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