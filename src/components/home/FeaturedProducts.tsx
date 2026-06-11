import Image from "next/image";
import Button from "../shared/Button";
import SectionHeading from "../shared/SectionHeading";

const products = [
  {
    title: "Modern Oak Door",
    slug: "/doors/modern-oak-door",
    image: "/featured/door-featured.png",
    description:
      "Elegant wood-textured finish ideal for modern interiors.",
  },
  {
    title: "Modern Sliding Window",
    slug: "/windows/modern-sliding-window",
    image: "/featured/window-featured.png",
    description:
      "Smooth operation with excellent durability and aesthetics.",
  },
  {
    title: "Premium WPC Frame",
    slug: "/frames/premium-wpc-frame",
    image: "/featured/frame-featured.jpg",
    description:
      "Engineered for strength and long-term reliability.",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <SectionHeading
          eyebrow="FEATURED PRODUCTS"
          title="Crafted for Modern Spaces"
        />

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-[24px] overflow-hidden border bg-white"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={800}
                height={800}
                className="h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {product.title}
                </h3>

                <p className="text-neutral-600 mb-6">
                  {product.description}
                </p>

                <div className="flex gap-3 flex-wrap">
                  <Button href={`/products/${product.slug}`}>
                    View Product
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