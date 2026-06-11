const offerings = [
  "Doors",
  "Windows",
  "Frames",
  "Future Interior Solutions",
];

export default function Offerings() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-12">
          Comprehensive Product Solutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {offerings.map((item) => (
            <div
              key={item}
              className="p-8 border rounded-[24px]"
            >
              <h3 className="font-semibold text-xl">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}