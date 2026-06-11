import Image from "next/image";
import Button from "../shared/Button";

const categories = [
  {
    title: "Doors",
    image: "/categories/doors.png",
    href: "/products/doors",
  },
  {
    title: "Windows",
    image: "/categories/windows.png",
    href: "/products/windows",
  },
  {
    title: "Frames",
    image: "/categories/frames.png",
    href: "/products/frames",
  },
];

export default function ProductCategories() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-12">
          Explore Our Product Range
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((item) => (
            <div
              key={item.title}
              className="group rounded-[24px] overflow-hidden border"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                className="h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <Button href={item.href}>
                  View {item.title}
                </Button>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}