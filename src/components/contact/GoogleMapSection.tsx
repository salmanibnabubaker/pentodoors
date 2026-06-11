import Button from "../shared/Button";

export default function GoogleMapSection() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-5xl font-bold mb-6">
              Find Us
            </h2>

            <p className="text-lg text-neutral-600 mb-8">
              Visit our showroom or office to explore our
              doors, windows, and frames in person.
              Our team will be happy to assist you with
              product selection and project requirements.
            </p>

            <div className="space-y-4 mb-8">

              <div>
                ✓ Easy Navigation Support
              </div>

              <div>
                ✓ Google Maps Directions
              </div>

              <div>
                ✓ Mobile-Friendly Access
              </div>

              <div>
                ✓ Quick Route Planning
              </div>

            </div>

            <Button href="#">
              View Location
            </Button>

          </div>

          <div className="overflow-hidden rounded-[24px] border">

            <iframe
              src="https://www.google.com/maps/embed?pb="
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />

          </div>

        </div>

      </div>

    </section>
  );
}