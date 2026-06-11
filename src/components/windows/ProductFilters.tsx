export default function WindowFilters() {
  const filters = [
    "WPC",
    "uPVC",
    "Sliding",
    "Casement",
    "Fixed",
    "Ventilator",
    "Residential",
    "Commercial",
    "Villa",
    "Apartment",
    "White",
    "Wood Finish",
    "Custom Finish",
  ];

  return (
    <section className="pb-20">

      <div className="container-custom">

        <div className="max-w-3xl mb-10">

          <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
            PRODUCT FILTERS
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Find Your Ideal Window
          </h2>

          <p className="text-neutral-600">
            Explore different window options based on
            material, opening style, application, and finish.
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          {filters.map((filter) => (
            <button
              key={filter}
              className="
                px-5
                py-3
                rounded-full
                border
                bg-white
                hover:bg-black
                hover:text-white
                transition-all
                duration-300
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