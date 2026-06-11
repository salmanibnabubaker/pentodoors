export default function ProjectFilters() {
  const filters = [
    "Residential Homes",
    "Luxury Villas",
    "Apartments",
    "Commercial Buildings",
    "Renovation Projects",
    "Hospitality Projects",
  ];

  return (
    <section className="pb-20">

      <div className="container-custom">

        <h2 className="text-4xl font-bold mb-8">
          Browse Projects By Category
        </h2>

        <div className="flex flex-wrap gap-3">

          {filters.map((filter) => (
            <button
              key={filter}
              className="
                px-5
                py-3
                rounded-full
                border
                hover:bg-black
                hover:text-white
                transition
              "
            >
              {filter}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}