import Image from "next/image";

const collections = [
  {
    title: "Premium WPC Series",
    image: "/frames/collections/wpc.jpg",
  },

  {
    title: "Waterproof Performance Collection",
    image: "/frames/collections/waterproof.jpg",
  },

  {
    title: "Commercial Strength Series",
    image: "/frames/collections/commercial.jpg",
  },
];

export default function FeaturedFrameCollections() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          Popular Choices
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {collections.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[24px] border group"
            >

              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                className="
                  h-[350px]
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-500
                "
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}