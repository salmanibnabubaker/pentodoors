const reasons = [
  {
    title: "Expert Recommendations",
    description:
      "Receive guidance based on your project requirements, budget, and design preferences.",
  },

  {
    title: "Quick Responses",
    description:
      "Get fast communication and support through WhatsApp, phone, and email.",
  },

  {
    title: "Transparent Quotations",
    description:
      "Receive clear product information, specifications, and pricing details.",
  },

  {
    title: "Customer-Focused Support",
    description:
      "Enjoy assistance from initial inquiry through project completion.",
  },
];

export default function WhyContactUs() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <div className="max-w-5xl">

          <h2 className="text-5xl font-bold mb-6">
            What You Can Expect
          </h2>

          <p className="text-lg text-neutral-600 mb-12">
            Our team is committed to helping you make
            informed decisions and ensuring a smooth
            experience from inquiry to delivery.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {reasons.map((item) => (
            <div
              key={item.title}
              className="border rounded-[24px] p-8"
            >

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-neutral-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}