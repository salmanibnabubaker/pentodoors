const faqs = [
  {
    question: "Do you help customers choose products?",
    answer:
      "Yes. Product consultation is one of our key services. We help customers select the most suitable doors, windows, and frames based on their project requirements, preferences, and budget.",
  },

  {
    question: "Do you support commercial projects?",
    answer:
      "Absolutely. We work with builders, developers, contractors, institutions, and commercial clients on projects of various sizes.",
  },

  {
    question: "Can I request custom solutions?",
    answer:
      "Yes. We can discuss project-specific requirements, custom sizes, and other specialized needs.",
  },

  {
    question: "Do you provide quotations?",
    answer:
      "Yes. Quotations can be requested through WhatsApp, phone, email, or our inquiry forms.",
  },

  {
    question: "Do you support bulk orders?",
    answer:
      "Yes. Bulk supply services are available for builders, developers, contractors, institutions, and large-scale projects.",
  },
];

export default function ServicesFAQ() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">

        <h2 className="text-5xl font-bold mb-16 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border rounded-[24px] p-8"
            >
              <h3 className="text-xl font-bold mb-4">
                {faq.question}
              </h3>

              <p className="text-neutral-600">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}