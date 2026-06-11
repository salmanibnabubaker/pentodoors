import Image from "next/image";
import Button from "../shared/Button";
import { categories } from "@/data/products";

export default function ProductCategories() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          Browse by Category
        </h2>

        <div className="space-y-16">

          {categories.map((category) => (
            <div
              key={category.title}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={900}
                height={700}
                className="rounded-[24px]"
              />

              <div>

                <h3 className="text-4xl font-bold mb-4">
                  {category.title}
                </h3>

                <p className="text-neutral-600 mb-8">
                  {category.description}
                </p>

                <div className="mb-8">

                  <h4 className="font-semibold mb-3">
                    Product Types
                  </h4>

                  <ul className="space-y-2">
                    {category.types.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>

                </div>

                <div className="mb-8">

                  <h4 className="font-semibold mb-3">
                    Key Benefits
                  </h4>

                  <div className="grid grid-cols-2 gap-2">

                    {category.benefits.map((item) => (
                      <div key={item}>
                        ✓ {item}
                      </div>
                    ))}

                  </div>

                </div>

                <Button href={category.href}>
                  Explore {category.title}
                </Button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}