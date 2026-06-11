const values = [
  "Quality First",
  "Customer Commitment",
  "Innovation",
  "Reliability",
  "Integrity",
];

export default function Values() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-12">
          What Drives Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {values.map((value) => (
            <div
              key={value}
              className="p-8 border rounded-[24px]"
            >
              <h3 className="font-semibold text-xl">
                {value}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}