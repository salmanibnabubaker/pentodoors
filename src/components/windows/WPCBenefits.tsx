const benefits = [
  {
    title: "Better Comfort",
    description:
      "Improved airflow and indoor climate for a more comfortable living environment.",
  },

  {
    title: "Energy Efficiency",
    description:
      "Reduced heat transfer and better insulation for enhanced performance.",
  },

  {
    title: "Increased Property Value",
    description:
      "Enhances the appearance, functionality, and market appeal of buildings.",
  },

  {
    title: "Enhanced Aesthetics",
    description:
      "Complements contemporary architecture with clean and elegant designs.",
  },

  {
    title: "Improved Natural Lighting",
    description:
      "Creates brighter and more inviting spaces throughout the day.",
  },

  {
    title: "Better Ventilation",
    description:
      "Supports healthier indoor environments through improved airflow.",
  },
];

export default function ModernWindowBenefits() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="max-w-3xl mb-16">

          <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
            BENEFITS OF MODERN WINDOWS
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Why Quality Windows Matter
          </h2>

          <p className="text-lg text-neutral-600">
            Modern windows contribute significantly to
            comfort, efficiency, aesthetics, and overall
            building performance.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((item) => (
            <div
              key={item.title}
              className="
                p-8
                rounded-[24px]
                border
                bg-white
                hover:shadow-lg
                transition-all
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-neutral-100
                  flex
                  items-center
                  justify-center
                  text-xl
                  mb-6
                "
              >
                ✓
              </div>

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