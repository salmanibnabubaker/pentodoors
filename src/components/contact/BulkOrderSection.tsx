import Button from "../shared/Button";

const benefits = [
  "Competitive Pricing",
  "Project-Based Support",
  "Reliable Supply",
  "Professional Assistance",
];

export default function BulkOrderSection() {
  const whatsappNumber = "919846083216"; // Replace with your WhatsApp number

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`
Hello Pentodoors,

I am interested in discussing a bulk order for my project.

Project Type:
□ Residential Project
□ Apartment Complex
□ Commercial Building
□ Institutional Project
□ Hospitality Project

Please share:
• Product catalogue
• Bulk pricing details
• Delivery timelines
• Project support options

Thank you.
`)}`;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="rounded-[32px] border p-12">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
              BULK ORDERS
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Builder, Contractor, or Developer?
            </h2>

            <p className="text-lg text-neutral-600 mb-10">
              We support large-scale projects with dependable supply,
              competitive pricing, and dedicated project assistance
              throughout the procurement process.
            </p>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">
                We Support
              </h3>

              <div className="grid md:grid-cols-2 gap-4 text-neutral-700">
                <div>• Residential Projects</div>
                <div>• Apartment Complexes</div>
                <div>• Commercial Buildings</div>
                <div>• Institutional Projects</div>
                <div>• Hospitality Projects</div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">
                Benefits
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl p-5"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                href={whatsappLink}
                variant="secondary"
              >
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}