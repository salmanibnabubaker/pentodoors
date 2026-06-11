import Image from "next/image";

const applications = [
  {
    title: "Living Room Windows",
    image: "/windows/applications/living-room.jpg",
    description:
      "Enhance natural lighting and visual appeal with modern window systems.",
  },

  {
    title: "Bedroom Windows",
    image: "/windows/applications/bedroom.jpg",
    description:
      "Create comfortable, private, and well-ventilated spaces.",
  },

  {
    title: "Kitchen Windows",
    image: "/windows/applications/kitchen.jpg",
    description:
      "Practical solutions designed for ventilation and easy maintenance.",
  },

  {
    title: "Bathroom Windows",
    image: "/windows/applications/bathroom.jpg",
    description:
      "Designed for privacy and moisture-prone environments.",
  },

  {
    title: "Balcony Windows",
    image: "/windows/applications/balcony.jpg",
    description:
      "Maximize views, airflow, and modern aesthetics.",
  },

  {
    title: "Commercial Windows",
    image: "/windows/applications/commercial.jpg",
    description:
      "Durable systems engineered for offices and commercial buildings.",
  },
];

export default function WindowApplications() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <div className="max-w-3xl mb-16">

          <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
            SHOP BY APPLICATION
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Find the Perfect Window for Every Space
          </h2>

          <p className="text-lg text-neutral-600">
            Discover window solutions tailored for
            residential, commercial, and architectural
            applications.
          </p>

        </div>

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
                hover:shadow-lg
                transition-all
              "
            >

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="
                    h-[300px]
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