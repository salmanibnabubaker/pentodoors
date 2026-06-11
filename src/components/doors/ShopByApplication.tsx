import Image from "next/image";

const applications = [
  {
    title: "Bedroom Doors",
    image: "/doors/applications/bedroom.jpg",
  },

  {
    title: "Bathroom Doors",
    image: "/doors/applications/bathroom.jpg",
  },

  {
    title: "Kitchen Doors",
    image: "/doors/applications/kitchen.jpg",
  },

  {
    title: "Living Room Doors",
    image: "/doors/applications/living.jpg",
  },

  {
    title: "Office Doors",
    image: "/doors/applications/office.jpg",
  },

  {
    title: "Commercial Doors",
    image: "/doors/applications/commercial.jpg",
  },
];

export default function ShopByApplication() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          Find the Perfect Door for Your Space
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {applications.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[24px] border"
            >

              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                className="
                  h-[300px]
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