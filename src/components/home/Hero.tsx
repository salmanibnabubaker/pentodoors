import Image from "next/image";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className="pt-36 pb-24">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
              Premium WPC Solutions
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Premium Doors,
              Windows & Frames
              for Modern Living
            </h1>

            <p className="text-lg text-neutral-600 mb-8 max-w-xl">
              Engineered for durability, designed for elegance.
              Discover waterproof WPC doors, premium windows,
              and high-performance frames built to withstand
              time and weather.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="/products">
                Explore Products
              </Button>

              <Button
                href="https://wa.me/919846083216"
                variant="secondary"
              >
                WhatsApp Inquiry
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <span>✓ Waterproof</span>
              <span>✓ Termite Resistant</span>
              <span>✓ Low Maintenance</span>
              <span>✓ Premium Finish</span>

            </div>

          </div>

          <div>

            <Image
              src="/hero/hero-main.png"
              alt="Pentodoors Hero"
              width={1000}
              height={1200}
              className="rounded-[32px] object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}