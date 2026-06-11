import Image from "next/image";
import Button from "../shared/Button";
import { windowProducts } from "@/data/windows";

export default function WindowProductGrid() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <div className="max-w-3xl mb-16">

          <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
            PRODUCT COLLECTION
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Window Collection
          </h2>

          <p className="text-lg text-neutral-600">
            Explore premium window solutions designed for
            comfort, ventilation, energy efficiency,
            durability, and modern architectural aesthetics.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {windowProducts.map((product) => (
            <div
              key={product.name}
              className="
                group
                rounded-[24px]
                overflow-hidden
                border
                bg-white
                hover:shadow-xl
                transition-all
              "
            >

              <div className="overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={700}
                  className="
                    h-[320px]
                    w-full
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

              </div>

              <div className="p-6">

                <span
                  className="
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    bg-neutral-100
                    text-sm
                    mb-4
                  "
                >
                  {product.badge}
                </span>

                <h3 className="text-2xl font-bold mb-4">
                  {product.name}
                </h3>

                <p className="text-neutral-600 mb-6">
                  Premium window solution designed for
                  modern homes, villas, apartments,
                  and commercial spaces.
                </p>

                <div className="flex gap-3">

                  <Button
                    href={`/products/windows/${product.slug}`}
                  >
                    View Details
                  </Button>

                  <Button
                    href={`https://wa.me/919846083216/?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}.%20Please%20share%20more%20details.`}
                    variant="secondary"
                  >
                    WhatsApp
                  </Button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}