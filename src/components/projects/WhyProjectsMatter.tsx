const benefits = [
  "Design Possibilities",
  "Product Performance",
  "Finish Quality",
  "Installation Standards",
  "Project Outcomes",
];

export default function WhyProjectsMatter() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-8">
          Confidence Through Real Results
        </h2>

        <p className="text-lg text-neutral-600 max-w-4xl mb-12">
          Choosing building products becomes easier when you can
          see real-world applications. Our completed projects
          help customers evaluate quality, performance, design,
          and installation standards before making a decision.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((item) => (
            <div
              key={item}
              className="
                border
                rounded-[24px]
                p-8
                text-lg
                font-medium
              "
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}