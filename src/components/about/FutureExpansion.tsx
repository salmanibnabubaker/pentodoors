import Image from "next/image";

export default function FutureExpansion() {
  const futureItems = [
    "Modular Kitchens",
    "Wardrobes",
    "TV Units",
    "Storage Systems",
    "Wall Panels",
    "Office Furniture",
    "Custom Interior Solutions",
  ];

  return (
    <section className="section-padding bg-white">

      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-5xl font-bold mb-6">
            Growing Beyond Doors & Windows
          </h2>

          <p className="text-neutral-600 mb-8">
            Pentodoors is preparing to expand into
            complete interior solutions.
          </p>

          <div className="grid grid-cols-2 gap-4">

            {futureItems.map((item) => (
              <div key={item}>
                ✓ {item}
              </div>
            ))}

          </div>

        </div>

        <Image
          src="/about/future.jpg"
          alt="Future Expansion"
          width={1200}
          height={900}
          className="rounded-[24px]"
        />

      </div>

    </section>
  );
}