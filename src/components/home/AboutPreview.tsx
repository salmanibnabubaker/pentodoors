import Image from "next/image";
import Button from "../shared/Button";

export default function AboutPreview() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <Image
            src="/about/about-preview.png"
            alt="About Pentodoors"
            width={1000}
            height={800}
            className="rounded-[24px]"
          />

          <div>

            <p className="text-neutral-500 mb-4">
              ABOUT US
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Building Better Spaces with
              Quality and Innovation
            </h2>

            <p className="text-neutral-600 mb-8 leading-relaxed">
              At Pentodoors & Frames, we specialize in
              premium WPC doors, windows, and frames
              designed for modern homes and commercial
              spaces.
            </p>

            <Button href="/about">
              Learn More About Us
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}