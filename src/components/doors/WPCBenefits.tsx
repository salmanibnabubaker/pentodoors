const benefits = [
  "Waterproof Construction",
  "Termite Resistance",
  "Low Maintenance",
  "Long Lifespan",
  "Consistent Appearance",
  "Suitable for Kerala Climate",
  "Eco-Friendly Alternative",
];

export default function WPCBenefits() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-8">
          Why More Homeowners Are Choosing WPC
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((item) => (
            <div
              key={item}
              className="border rounded-[24px] p-8"
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}