import Image from "next/image";
import Button from "../shared/Button";
import SectionHeading from "../shared/SectionHeading";

const projects = [
  "/projects/project-1.jpg",
  "/projects/project-2.jpg",
  "/projects/project-3.jpg",
  "/projects/project-4.jpg",
];

export default function ProjectsPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <SectionHeading
          eyebrow="PROJECTS"
          title="Completed Projects"
          description="Explore installations that showcase quality craftsmanship, attention to detail and modern design."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {projects.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[24px]"
            >
              <Image
                src={image}
                alt={`Project ${index + 1}`}
                width={600}
                height={800}
                className="h-[400px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        <Button href="/projects">
          View All Projects
        </Button>

      </div>
    </section>
  );
}