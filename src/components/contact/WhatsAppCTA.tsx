import Button from "../shared/Button";

const topics = [
  "Product Availability",
  "Pricing",
  "Quotations",
  "Customization",
  "Delivery",
  "Bulk Orders",
];

export default function WhatsAppCTA() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="rounded-[32px] border p-12 text-center max-w-5xl mx-auto">

          <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
            WHATSAPP SUPPORT
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Prefer WhatsApp?
          </h2>

          <p className="text-lg text-neutral-600 mb-10 max-w-3xl mx-auto">
            Get instant assistance and discuss your
            requirements directly with our team.
            We're available to help you choose the
            right products and answer your questions.
          </p>

          <div className="mb-10">

            <h3 className="text-2xl font-semibold mb-6">
              Ask About
            </h3>

            <div className="flex flex-wrap justify-center gap-3">

              {topics.map((topic) => (
                <span
                  key={topic}
                  className="
                    px-5
                    py-3
                    rounded-full
                    border
                    bg-neutral-50
                  "
                >
                  {topic}
                </span>
              ))}

            </div>

          </div>

          <Button href="https://wa.me/919846083216">
            WhatsApp Us Now
          </Button>

        </div>

      </div>

    </section>
  );
}