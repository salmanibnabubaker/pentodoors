const benefits = [
  "Longer Service Life",
  "Better Durability",
  "Enhanced Appearance",
  "Improved Performance",
  "Reduced Maintenance Costs",
  "Excellent Long-Term Value",
];

export default function ProductBenefits() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">

        <div className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Long-Term Value
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Benefits That Last
          </h2>

          <p className="text-lg text-neutral-600">
            Investing in quality products helps improve
            performance, reduce maintenance requirements,
            and enhance the overall appearance of your space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="
                bg-white
                border
                rounded-[24px]
                p-8
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                  mb-6
                  font-semibold
                "
              >
                ✓
              </div>

              <h3 className="text-xl font-semibold">
                {benefit}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}