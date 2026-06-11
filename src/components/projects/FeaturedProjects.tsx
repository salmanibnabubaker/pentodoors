import Image from "next/image";
import Button from "../shared/Button";

const projects = [
  {
    title: "Modern Family Home",
    location: "Kerala",
    image: "/projects/featured/home.jpg",
    products: [
      "WPC Doors",
      "Sliding Windows",
      "Waterproof Frames",
    ],
    description:
      "A contemporary residential project featuring modern finishes, enhanced ventilation, and durable waterproof solutions.",
  },

  {
    title: "Luxury Villa Project",
    location: "Kerala",
    image: "/projects/featured/villa.jpg",
    products: [
      "Designer Doors",
      "Casement Windows",
      "Premium Frames",
    ],
    description:
      "Elegant architectural solutions designed to complement luxury living spaces.",
  },

  {
    title: "Commercial Office Building",
    location: "Kerala",
    image: "/projects/featured/commercial.jpg",
    products: [
      "Commercial Doors",
      "uPVC Windows",
      "Heavy-Duty Frames",
    ],
    description:
      "Built for durability, functionality, and professional aesthetics.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-10 md:mb-16 text-center lg:text-left">
          Signature Installations
        </h2>

        <div className="space-y-14 md:space-y-20">
          {projects.map((project) => (
            <div
              key={project.title}
              className="mb-6 grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={900}
                className="w-full h-auto rounded-2xl md:rounded-[24px] object-cover"
              />

              {/* Content */}
              <div className="text-center lg:text-left">
                <p className="text-xs sm:text-sm uppercase tracking-[2px] text-neutral-500 mb-3">
                  {project.location}
                </p>

                <h3 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-5 md:mb-6">
                  {project.title}
                </h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">
                    Products Used
                  </h4>

                  <ul className="space-y-2">
                    {project.products.map((item) => (
                      <li key={item}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-neutral-600 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                  {project.description}
                </p>

                <div className="flex justify-center lg:justify-start">
                  <Button
                    href={`https://wa.me/919846083216/?text=Hello%20Pentodoors%20Team%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20featured%20project-${encodeURIComponent(
                      project.title
                    )}.%20Could%20you%20please%20provide%20me%20with%20additional%20details%3F`}
                    variant="primary"
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}