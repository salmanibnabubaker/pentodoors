const stats = [
  {
    value: "100+",
    label: "Projects Completed",
  },

  {
    value: "500+",
    label: "Happy Clients",
  },

  {
    value: "1000+",
    label: "Product Installations",
  },

  {
    value: "Across Kerala",
    label: "Service Areas Covered",
  },
];

export default function ProjectStats() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <h2 className="text-5xl font-bold text-center mb-16">
          Trusted Across Multiple Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                text-center
                border
                rounded-[24px]
                p-10
                bg-white
              "
            >

              <div className="text-4xl lg:text-5xl font-bold mb-4">
                {stat.value}
              </div>

              <p className="text-neutral-600">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}