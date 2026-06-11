const benefits = [
  "Waterproof",
  "Termite Resistant",
  "Durable",
  "Low Maintenance",
  "Eco-Friendly",
  "Aesthetic Appeal",
];

export default function WhyWPC() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-6">
          The Future of Modern Building Solutions
        </h2>

        <p className="text-lg text-neutral-600 mb-12">
          Wood Plastic Composite (WPC) has transformed
          the way modern doors, windows and frames are
          designed.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((item) => (
            <div
              key={item}
              className="p-8 rounded-[24px] border"
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}