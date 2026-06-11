import Button from "../shared/Button";

export default function GoogleMap() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="mb-12">

          <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
            LOCATION
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Find Us
          </h2>

          <p className="text-lg text-neutral-600 max-w-3xl">
            Visit our showroom or office to explore our
            collection of doors, windows, and frames,
            discuss your project requirements, and get
            expert guidance from our team.
          </p>

        </div>

        <div className="overflow-hidden rounded-[32px] border">

          <iframe
            src="https://www.google.com/maps/embed?pb="
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />

        </div>

        <div className="flex flex-wrap gap-4 mt-8">

          <Button
            href="https://maps.google.com"
          >
            Open in Google Maps
          </Button>

          <Button
            href="https://maps.google.com"
            variant="secondary"
          >
            Get Directions
          </Button>

        </div>

      </div>

    </section>
  );
}