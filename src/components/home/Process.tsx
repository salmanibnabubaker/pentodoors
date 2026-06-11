import SectionHeading from "../shared/SectionHeading";

const steps = [
  "Consultation & Requirement Analysis",
  "Product Selection",
  "Customization & Design",
  "Manufacturing",
  "Delivery",
  "Installation Support",
];

export default function Process() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <SectionHeading
          eyebrow="PROCESS"
          title="How We Work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <div
              key={step}
              className="p-8 rounded-[24px] border"
            >
              <div className="text-5xl font-bold text-neutral-300 mb-4">
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}