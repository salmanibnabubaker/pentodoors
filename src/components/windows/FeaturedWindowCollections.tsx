import Image from "next/image";

const collections = [
  {
    title: "Modern Sliding Series",

    image: "/windows/collections/sliding.jpg",

    description:
      "Contemporary sliding windows designed for urban living.",
  },

  {
    title: "Premium Villa Collection",

    image: "/windows/collections/villa.jpg",

    description:
      "Elegant window systems created for luxury residences.",
  },

  {
    title: "Energy Efficient Series",

    image: "/windows/collections/energy-efficient.jpg",

    description:
      "Solutions focused on thermal performance and comfort.",
  },
];

export default function FeaturedWindowCollections() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="max-w-3xl mb-16">

          <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
            FEATURED COLLECTIONS
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Popular Choices
          </h2>

          <p className="text-lg text-neutral-600">
            Explore our most requested window collections,
            designed to enhance comfort, natural lighting,
            ventilation, and modern architectural aesthetics.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {collections.map((item) => (
            <div
              key={item.title}
              className="
                overflow-hidden
                rounded-[24px]
                border
                group
                bg-white
              "
            >

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="
                    h-[350px]
                    w-full
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-neutral-600">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}