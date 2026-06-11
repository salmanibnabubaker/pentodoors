import Button from "../shared/Button";
import Image from "next/image";

export default function ProjectsHero() {
  return (
    <section className="pt-8 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 mb-8">
      <div className="pt-8 container-custom">
        <div className="mb-8 pt-8 grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="order-first lg:order-last">
            <Image
              src="/projects/hero.jpg"
              alt="Pentodoors Projects"
              width={1200}
              height={900}
              priority
              className="w-full h-auto rounded-2xl md:rounded-[32px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="uppercase tracking-[3px] text-neutral-500 mb-4 text-sm">
              GALLERY & PROJECTS
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Inspiring Spaces, Exceptional Results
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 mb-6 md:mb-8">
              Explore completed projects featuring premium
              doors, windows, and frames across Kerala.
            </p>

            <p className="text-neutral-600 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
              From modern homes and luxury villas to
              commercial developments, discover how
              Pentodoors & Frames helps bring architectural
              visions to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
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