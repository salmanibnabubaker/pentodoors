import Image from "next/image";
import Button from "../shared/Button";

const projects = [
  {
    title: "Modern Family Home",
    location: "Malappuram, Kerala",
    image: "/projects/grid/project-1.jpg",
    categories: ["WPC Doors", "Sliding Windows", "Frames"],
  },

  {
    title: "Luxury Villa Residence",
    location: "Kozhikode, Kerala",
    image: "/projects/grid/project-2.jpg",
    categories: ["Designer Doors", "Casement Windows"],
  },

  {
    title: "Commercial Office Space",
    location: "Kochi, Kerala",
    image: "/projects/grid/project-3.jpg",
    categories: ["Commercial Doors", "uPVC Windows"],
  },

  {
    title: "Apartment Renovation",
    location: "Thrissur, Kerala",
    image: "/projects/grid/project-4.jpg",
    categories: ["Flush Doors", "Sliding Windows"],
  },

  {
    title: "Premium Villa Project",
    location: "Kannur, Kerala",
    image: "/projects/grid/project-5.jpg",
    categories: ["Designer Doors", "Premium Frames"],
  },

  {
    title: "Hospitality Development",
    location: "Wayanad, Kerala",
    image: "/projects/grid/project-6.jpg",
    categories: ["Doors", "Windows", "Frames"],
  },
];

export default function ProjectsGrid() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          Explore Our Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
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
                src={project.image}
                alt={project.title}
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

                <p className="text-sm text-neutral-500 mb-2">
                  {project.location}
                </p>

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-neutral-100
                        text-sm
                      "
                    >
                      {category}
                    </span>
                  ))}

                </div>

                <div className="flex gap-3">

                  <Button
                    href={`https://wa.me/919846083216/?text=Hello%20Pentodoors%20Team%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20featured%20project-${encodeURIComponent(project.title)}.%20Could%20you%20please%20provide%20me%20with%20additional%20details%3F`}
                    variant="primary"
                  >
                    Learn More
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