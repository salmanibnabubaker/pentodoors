const testimonials = [
  {
    role: "Homeowner",

    quote:
      "The products look exactly as we imagined. The quality and finish are outstanding.",
  },

  {
    role: "Architect",

    quote:
      "Pentodoors products complemented our design perfectly and delivered excellent performance.",
  },

  {
    role: "Builder",

    quote:
      "Reliable materials, professional support, and timely delivery throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          What Our Clients Say
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.role}
              className="
                border
                rounded-[24px]
                p-8
                bg-white
                hover:shadow-lg
                transition-all
              "
            >

              <div className="text-5xl leading-none mb-6">
                "
              </div>

              <p className="text-neutral-600 text-lg mb-8">
                {item.quote}
              </p>

              <div>

                <p className="font-bold text-xl">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}