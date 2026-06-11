const inspirations = [
  "New Home Construction",
  "Villa Development",
  "Apartment Renovation",
  "Office Spaces",
  "Commercial Buildings",
  "Hospitality Projects",
];

export default function InspirationSection() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-8">
          Planning Your Next Project?
        </h2>

        <p className="text-lg text-neutral-600 max-w-4xl mb-12">
          Browse our products and completed projects to
          discover ideas, inspiration, and practical
          solutions for your upcoming construction,
          renovation, or commercial development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {inspirations.map((item) => (
            <div
              key={item}
              className="
                border
                rounded-[24px]
                p-8
                bg-white
                hover:shadow-lg
                transition-all
              "
            >

              <h3 className="text-2xl font-bold">
                {item}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}