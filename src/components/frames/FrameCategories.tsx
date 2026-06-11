import Image from "next/image";
import Button from "../shared/Button";
import { frameCategories } from "@/data/frames";

export default function FrameCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-10 md:mb-16 text-center lg:text-left">
          Explore Our Frame Collection
        </h2>

        <div className="space-y-14 md:space-y-20 lg:space-y-24">
          {frameCategories.map((frame) => (
            <div
              key={frame.title}
              className="mb-8 grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center"
            >
              {/* Image */}
              <Image
                src={frame.image}
                alt={frame.title}
                width={1000}
                height={800}
                className="w-full h-auto rounded-2xl md:rounded-[24px] object-cover"
              />

              {/* Content */}
              <div className="pt-8 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
                  {frame.title}
                </h3>

                <p className="text-neutral-600 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                  {frame.description}
                </p>

                <div className="mb-6 md:mb-8">
                  <h4 className="font-semibold mb-3">
                    Ideal For
                  </h4>

                  <ul className="space-y-2">
                    {frame.idealFor.map((item: string) => (
                      <li key={item}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 md:mb-8">
                  <h4 className="font-semibold mb-3">
                    Benefits
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {frame.benefits.map((item: string) => (
                      <div key={item}>
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button href={`/products/frames/${frame.slug}`}>
                    View Product
                  </Button>

                  <Button
                    href={`https://wa.me/919846083216/?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                      frame.title
                    )}.%20Please%20share%20more%20details.`}
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