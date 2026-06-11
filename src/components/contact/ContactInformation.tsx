import Button from "../shared/Button";

export default function ContactInformation() {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16">

          <div>

            <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
              BUSINESS DETAILS
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Contact Information
            </h2>

            <p className="text-lg text-neutral-600">
              Connect with our team for product inquiries,
              quotations, project discussions, and expert
              recommendations.
            </p>

          </div>

          <div className="rounded-[32px] border p-10">

            <div className="space-y-8">

              <div>
                <p className="text-sm uppercase tracking-[2px] text-neutral-500 mb-2">
                  Company Name
                </p>

                <h3 className="text-2xl font-semibold">
                  Pentodoors & Frames
                </h3>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[2px] text-neutral-500 mb-2">
                  Phone Number
                </p>

                <a
                  href="tel:++919846083216"
                  className="text-lg hover:underline"
                >
                  +91 98460 83216
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[2px] text-neutral-500 mb-2">
                  WhatsApp Number
                </p>

                <a
                  href="https://wa.me/919846083216"
                  className="text-lg hover:underline"
                >
                  +91 98460 83216
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[2px] text-neutral-500 mb-2">
                  Email Address
                </p>

                <a
                  href="mailto:pentodoors@gmail.com"
                  className="text-lg hover:underline"
                >
                  pentodoors@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[2px] text-neutral-500 mb-2">
                  Business Address
                </p>

                <p className="text-lg text-neutral-700">
                  Pentodoors & Frames<br />
                  Your Address Line 1<br />
                  City, District, Kerala<br />
                  PIN Code
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[2px] text-neutral-500 mb-2">
                  Working Hours
                </p>

                <p className="text-lg text-neutral-700">
                  Monday – Saturday<br />
                  9:00 AM – 6:00 PM
                </p>

                <p className="text-neutral-500 mt-2">
                  Sunday – Closed
                </p>
              </div>

              {/*<Button href="/contact">
                Request a Quote
              </Button>
              */}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}