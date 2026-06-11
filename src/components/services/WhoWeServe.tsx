const customerTypes = [
  "Homeowners",
  "Architects",
  "Interior Designers",
  "Builders",
  "Contractors",
  "Developers",
  "Commercial Clients",
  "Institutions",
];

export default function WhoWeServe() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          Trusted by Various Customer Segments
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {customerTypes.map((customer) => (
            <div
              key={customer}
              className="
                border
                rounded-[24px]
                p-8
                text-center
                font-semibold
                text-lg
              "
            >
              {customer}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}