import Button from "../shared/Button";

const benefits = [
  "Premium Product Range",
  "Business Growth Opportunities",
  "Marketing Support",
  "Dedicated Assistance",
];

export default function DealerInquirySection() {
  const whatsappNumber = "919846083216"; // Replace with your WhatsApp number

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`
Hello Pentodoors,

I am interested in becoming a Dealer / Distribution Partner.

Please share details regarding:

• Dealer eligibility requirements
• Product categories available
• Investment and partnership opportunities
• Marketing and business support
• Distribution coverage areas

Looking forward to discussing the partnership.

Thank you.
`)}`;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-5xl">
          <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
            DEALER PARTNERSHIP
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Become a Dealer or Distribution Partner
          </h2>

          <p className="text-lg text-neutral-600 mb-10">
            Interested in partnering with Pentodoors & Frames?
            We are continuously expanding our network through
            reliable dealers and distribution partners across Kerala.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="border rounded-[24px] p-8"
              >
                ✓ {benefit}
              </div>
            ))}
          </div>

          <Button
            href={whatsappLink}
          >
            Become a Dealer
          </Button>
        </div>
      </div>
    </section>
  );
}