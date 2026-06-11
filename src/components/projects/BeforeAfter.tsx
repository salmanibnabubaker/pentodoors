import Image from "next/image";

const transformations = [
  {
    title: "Residential Renovation",
    before: "/projects/before-after/home-before.jpg",
    after: "/projects/before-after/home-after.jpg",
    summary:
      "Upgraded outdated doors and windows with modern WPC solutions, improving aesthetics, durability, and ventilation.",
  },

  {
    title: "Villa Modernization",
    before: "/projects/before-after/villa-before.jpg",
    after: "/projects/before-after/villa-after.jpg",
    summary:
      "Enhanced the property with designer doors, premium frames, and contemporary window systems for a luxury appearance.",
  },

  {
    title: "Commercial Upgrade",
    before: "/projects/before-after/commercial-before.jpg",
    after: "/projects/before-after/commercial-after.jpg",
    summary:
      "Replaced aging installations with commercial-grade products, improving functionality, appearance, and long-term reliability.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-10 md:mb-16 text-center lg:text-left">
          Transformation Stories
        </h2>

        <div className="space-y-10 md:space-y-16 lg:space-y-20">
          {transformations.map((item) => (
            <div
              key={item.title}
              className="mb-6 border-b md:rounded-[32px] p-5 sm:p-6 md:p-8 lg:p-12"
            >
              <h3 className="py-4 text-2xl sm:text-3xl font-bold leading-tight mb-6 md:mb-10 text-center lg:text-left">
                {item.title}
              </h3>

              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                
                {/* Before */}
                <div>
                  <p className="font-semibold mb-3 md:mb-4">
                    Before
                  </p>

                  <Image
                    src={item.before}
                    alt={`${item.title} Before`}
                    width={1000}
                    height={800}
                    className="w-full h-auto rounded-xl md:rounded-[24px] object-cover"
                  />
                </div>

                {/* After */}
                <div>
                  <p className="font-semibold mb-3 md:mb-4">
                    After
                  </p>

                  <Image
                    src={item.after}
                    alt={`${item.title} After`}
                    width={1000}
                    height={800}
                    className="w-full h-auto rounded-xl md:rounded-[24px] object-cover"
                  />
                </div>

              </div>

              <div>
                <h4 className="font-semibold mb-3">
                  Improvement Summary
                </h4>

                <p className="mb-8 text-neutral-600 max-w-3xl">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}