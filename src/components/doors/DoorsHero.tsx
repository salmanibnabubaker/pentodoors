import Image from "next/image";
import Button from "../shared/Button";

export default function DoorsHero() {
  return (
    <section className="pt-8 mb-8 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24">
      <div className="container-custom px-5 md:px-6 lg:px-8">
        <div className="pt-8 mb-8 grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

          {/* Image */}
          <div className="pt-8 order-first lg:order-last">
            <Image
              src="/doors/hero.jpg"
              alt="Premium Doors"
              width={1200}
              height={900}
              priority
              className="w-full h-auto rounded-2xl md:rounded-[32px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="pt-8 text-center lg:text-left">
            <p className="uppercase tracking-[3px] text-neutral-500 mb-4 text-sm">
              DOORS
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Premium Doors for Modern Living
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 mb-6 md:mb-8">
              Discover a wide range of durable, stylish,
              and high-performance doors designed for homes,
              apartments, villas, offices, and commercial spaces.
            </p>

            <p className="text-neutral-600 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
              Our door collection combines aesthetics,
              functionality, and long-lasting durability
              to enhance every environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/contact">
                Request a Quote
              </Button>

              <Button
                href="https://wa.me/919846083216"
                variant="secondary"
              >
                WhatsApp Inquiry
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}