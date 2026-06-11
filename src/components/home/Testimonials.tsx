import SectionHeading from "../shared/SectionHeading";

const testimonials = [
  {
    quote:
      "Excellent product quality and professional service. The WPC doors have transformed our home.",
    author: "Homeowner",
  },
  {
    quote:
      "Highly durable and aesthetically pleasing. Great experience working with Pentodoors.",
    author: "Contractor",
  },
  {
    quote:
      "Prompt support, quality materials and smooth installation.",
    author: "Builder",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What Our Customers Say"
        />

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-[24px] border"
            >
              <p className="text-neutral-600 mb-6">
                "{item.quote}"
              </p>

              <h4 className="font-semibold">
                — {item.author}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}