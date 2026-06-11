const testimonials = [
  {
    role: "Homeowner",
    quote:
      "The consultation process helped us choose products that perfectly matched our home.",
  },

  {
    role: "Builder",
    quote:
      "Reliable support throughout the project. Product recommendations were practical and cost-effective.",
  },

  {
    role: "Architect",
    quote:
      "The team understood our design goals and suggested solutions that aligned perfectly.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          What Clients Say About Our Service
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.role}
              className="border rounded-[24px] p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {testimonial.role}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}