const steps = [
  {
    step: "Step 1",
    title: "Initial Consultation",
    description:
      "Understand project requirements, goals, preferences, and overall objectives.",
  },

  {
    step: "Step 2",
    title: "Product Recommendation",
    description:
      "Suggest suitable doors, windows, and frames based on needs, design preferences, and budget.",
  },

  {
    step: "Step 3",
    title: "Quotation & Planning",
    description:
      "Provide detailed recommendations, specifications, and project quotations.",
  },

  {
    step: "Step 4",
    title: "Order Confirmation",
    description:
      "Finalize product selections, quantities, specifications, and project details.",
  },

  {
    step: "Step 5",
    title: "Supply & Delivery",
    description:
      "Coordinate product supply and delivery according to project timelines.",
  },

  {
    step: "Step 6",
    title: "After-Sales Support",
    description:
      "Provide ongoing assistance, guidance, and support whenever required.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          How We Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step) => (
            <div
              key={step.title}
              className="border rounded-[24px] p-8"
            >
              <span className="text-sm uppercase tracking-widest text-neutral-500">
                {step.step}
              </span>

              <h3 className="text-2xl font-bold mt-3 mb-4">
                {step.title}
              </h3>

              <p className="text-neutral-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}