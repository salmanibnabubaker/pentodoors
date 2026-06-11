import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="pt-36 pb-24">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
              ABOUT US
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About Pentodoors & Frames
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed">
              Crafting Premium Doors, Windows & Frames for
              Modern Spaces.
            </p>

            <p className="mt-6 text-neutral-600">
              Built on quality, innovation and customer trust,
              Pentodoors & Frames delivers durable and elegant
              solutions designed for contemporary homes and
              commercial environments.
            </p>
          </div>

          <Image
            src="/about/hero.jpg"
            alt="About Pentodoors"
            width={1200}
            height={900}
            className="rounded-[32px]"
          />

        </div>
      </div>
    </section>
  );
}