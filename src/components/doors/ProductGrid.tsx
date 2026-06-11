import Image from "next/image";
import Button from "../shared/Button";
import { doorProducts } from "@/data/door-products";

export default function ProductGrid() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          Door Collection
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {doorProducts.map((product) => (
            <div
              key={product.slug}
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
                  {product.shortDescription}
                </p>

                <div className="flex gap-3">

                  <Button
                    href={`/products/doors/${product.slug}`}
                  >
                    View Details
                  </Button>

                  <Button
                    href={`https://wa.me/919846083216/?text=Hello%2C%20I%20am%20interested%20in%20the%20${product.name}.%20Please%20share%20more%20details.`}
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