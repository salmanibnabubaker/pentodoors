const futureServices = [
  "Modular Kitchens",
  "Wardrobes",
  "TV Units",
  "Wall Panels",
  "Office Furniture",
  "Complete Interior Solutions",
];

export default function FutureServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <div className="max-w-4xl">

          <h2 className="text-5xl font-bold mb-6">
            Expanding Into Complete Interior Solutions
          </h2>

          <p className="text-lg text-neutral-600 mb-12">
            As Pentodoors & Frames grows, we plan to introduce additional
            products and services that help customers create complete,
            functional, and beautifully designed living spaces.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {futureServices.map((service) => (
              <div
                key={service}
                className="
                  border
                  rounded-[24px]
                  p-8
                  font-semibold
                  text-lg
                "
              >
                {service}
              </div>
            ))}

          </div>

          <p className="text-neutral-600 mt-10">
            Our goal is to become a one-stop destination for modern living
            solutions, offering premium products backed by professional
            guidance and dependable support.
          </p>

        </div>

      </div>
    </section>
  );
}