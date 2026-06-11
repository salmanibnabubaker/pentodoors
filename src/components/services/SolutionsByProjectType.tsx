const projectTypes = [
  {
    title: "Residential Homes",
    description:
      "Enhance comfort, functionality, and aesthetics with carefully selected doors, windows, and frames.",
  },

  {
    title: "Villas",
    description:
      "Premium solutions designed to complement luxury architecture and modern living.",
  },

  {
    title: "Apartments",
    description:
      "Modern, durable, and space-efficient products suitable for contemporary residential developments.",
  },

  {
    title: "Commercial Buildings",
    description:
      "Reliable products engineered for durability and performance in high-traffic environments.",
  },

  {
    title: "Hospitality Projects",
    description:
      "Elegant and long-lasting solutions for hotels, resorts, and guest accommodations.",
  },

  {
    title: "Institutional Projects",
    description:
      "Dependable products suitable for schools, offices, healthcare facilities, and public spaces.",
  },
];

export default function SolutionsByProjectType() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          Tailored Support for Every Project
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projectTypes.map((project) => (
            <div
              key={project.title}
              className="border rounded-[24px] p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-neutral-600">
                {project.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}