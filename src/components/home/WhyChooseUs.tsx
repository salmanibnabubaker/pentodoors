import SectionHeading from "../shared/SectionHeading";

const features = [
  {
    title: "Waterproof Performance",
    text: "Built to resist moisture and humidity.",
  },
  {
    title: "Termite Resistant",
    text: "Protection that lasts for years.",
  },
  {
    title: "Premium Quality Materials",
    text: "Carefully selected materials for superior performance.",
  },
  {
    title: "Elegant Designs",
    text: "Modern aesthetics suitable for contemporary interiors.",
  },
  {
    title: "Low Maintenance",
    text: "Easy to clean and maintain.",
  },
  {
    title: "Long Service Life",
    text: "Designed to remain durable for years.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title="Why Homeowners, Builders & Architects Choose Pentodoors"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-[24px] border border-neutral-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-neutral-600">
                {feature.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}