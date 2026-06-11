const locations = [
  "Malappuram",
  "Kochi",
  "Kozhikode",
  "Thrissur",
  "Palakkad",
  "Kannur",
  "Trivandrum",
  "Kottayam",
  "Alappuzha",
  "Wayanad",
  "Kasaragod",
  "Pathanamthitta",
];

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="max-w-5xl">

          <h2 className="text-5xl font-bold mb-6">
            Serving Customers Across Kerala
          </h2>

          <p className="text-lg text-neutral-600 mb-12">
            We proudly provide doors, windows, and frame
            solutions throughout Kerala. Whether you are
            building a home, villa, apartment, commercial
            space, or institutional project, our team is
            ready to support you.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {locations.map((location) => (
              <div
                key={location}
                className="
                  border
                  rounded-[20px]
                  p-5
                  text-center
                  font-medium
                  hover:shadow-md
                  transition
                "
              >
                {location}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}