import Image from "next/image";

const collections = [
  {
    title: "Modern Oak Collection",
    image: "/products/collections/oak.jpg",
  },

  {
    title: "Waterproof Performance Series",
    image: "/products/collections/waterproof.jpg",
  },

  {
    title: "Premium Commercial Collection",
    image: "/products/collections/commercial.jpg",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-12">
          Popular Choices
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {collections.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] overflow-hidden border"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                className="h-[320px] object-cover"
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