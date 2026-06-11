import Image from "next/image";
import Button from "../shared/Button";

const applications = [
  {
    title: "Doors",

    slug: "/products/doors",

    image: "/projects/applications/doors.jpg",

    description:
      "See how our doors enhance homes, villas, apartments, offices, and commercial spaces with style, durability, and performance.",
  },

  {
    title: "Windows",

    slug: "/products/windows",

    image: "/projects/applications/windows.jpg",

    description:
      "Explore window installations that maximize natural light, ventilation, energy efficiency, and modern architectural appeal.",
  },

  {
    title: "Frames",

    slug: "/products/frames",

    image: "/projects/applications/frames.jpg",

    description:
      "Discover frame solutions that provide structural support, long-term reliability, and seamless integration with doors and windows.",
  },
];

export default function ProductApplications() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          Products in Real Environments
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {applications.map((item) => (
            <div
              key={item.title}
              className="
                group
                overflow-hidden
                rounded-[24px]
                border
                bg-white
                hover:shadow-xl
                transition-all
              "
            >

              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                className="
                  h-[320px]
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-500
                "
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-neutral-600 mb-6">
                  {item.description}
                </p>

                <Button href={item.slug} variant="primary">
                  View Collection
                </Button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}