import Button from "../shared/Button";

const contactOptions = [
  {
    title: "WhatsApp",
    description:
      "Get quick responses and personalized assistance from our team.",
    buttonText: "WhatsApp Inquiry",
    href: "https://wa.me/919846083216",
  },

  {
    title: "Phone",
    description:
      "Speak directly with our team regarding products and quotations.",
    buttonText: "Call Now",
    href: "tel:+919846083216",
  },

  {
    title: "Email",
    description:
      "Send detailed inquiries, drawings, or project requirements.",
    buttonText: "Send Email",
    href: "mailto:pentodoors@gmail.com",
  },

  {
    title: "Visit Us",
    description:
      "Visit our showroom or office to explore products in person.",
    buttonText: "Get Directions",
    href: "#",
  },
];

export default function QuickContactOptions() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          Contact Us Instantly
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {contactOptions.map((option) => (
            <div
              key={option.title}
              className="
                rounded-[24px]
                border
                p-8
                bg-white
                hover:shadow-lg
                transition-all
              "
            >
              <h3 className="text-2xl font-bold mb-4">
                {option.title}
              </h3>

              <p className="text-neutral-600 mb-8">
                {option.description}
              </p>

              <Button href={option.href}>
                {option.buttonText}
              </Button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}