import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";

const applications = [
  {
    title: "Residential Homes",
    image: "/applications/residential.jpg",
  },
  {
    title: "Villas",
    image: "/applications/villa.jpg",
  },
  {
    title: "Apartments",
    image: "/applications/apartment.jpg",
  },
  {
    title: "Commercial Spaces",
    image: "/applications/commercial.jpg",
  },
];

export default function Applications() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <SectionHeading
          eyebrow="APPLICATIONS"
          title="Solutions for Every Space"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {applications.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-[24px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={700}
                className="h-[400px] object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">
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