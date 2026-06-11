import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";

interface RelatedProductsProps {
  products: Product[];
  basePath: string;
}

export default function RelatedProducts({
  products,
  basePath,
}: RelatedProductsProps) {
  if (!products.length) return null;

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">

        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Related Products
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You May Also Like
          </h2>

          <p className="text-lg text-neutral-600">
            Explore similar products that complement
            your project requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product.slug}
              className="
                group
                overflow-hidden
                border
                bg-white
                hover:shadow-xl
                transition-all
              "
            >
              <Link href={`${basePath}/${product.slug}`}>
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
              </Link>

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

                <p className="text-neutral-600 mb-6 line-clamp-3">
                  {product.shortDescription}
                </p>

                <Link
                  href={`${basePath}/${product.slug}`}
                  className="
                    inline-flex
                    items-center
                    font-medium
                    hover:underline
                  "
                >
                  View Product →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}