const testimonials = [
  {
    quote:
      "The quality exceeded our expectations. The finish looks premium and installation was smooth.",
    author: "Homeowner",
  },

  {
    quote:
      "Excellent durability and appearance. The products perfectly complemented our project.",
    author: "Contractor",
  },

  {
    quote:
      "Reliable quality, modern aesthetics, and professional support throughout the process.",
    author: "Architect",
  },
];

export default function ProductTestimonials() {
  return (
    <section className="py-20">
      <div className="container-custom">

        <div className="mb-10">
          <h2 className="text-3xl font-bold">
            Customer Feedback
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="
                border
                p-6
                bg-white
              "
            >
              <p
                className="
                  text-neutral-600
                  leading-relaxed
                  mb-6
                "
              >
                "{testimonial.quote}"
              </p>

              <div
                className="
                  text-sm
                  font-medium
                  text-neutral-900
                "
              >
                {testimonial.author}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}