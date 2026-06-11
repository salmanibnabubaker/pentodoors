import Button from "../shared/Button";

const services = [
  {
    title: "Product Consultation",
    description:
      "Receive expert recommendations based on project type, space requirements, design preferences, budget considerations, and performance needs.",
    points: [
      "Project Type",
      "Space Requirements",
      "Design Preferences",
      "Budget Considerations",
      "Performance Needs",
    ],
    slug: "/contact",
    button: "Book Consultation",
  },

  {
    title: "Door Solutions",
    description:
      "Comprehensive assistance for selecting the right doors that balance aesthetics, durability, and functionality.",
    points: [
      "WPC Doors",
      "Designer Doors",
      "Flush Doors",
      "Laminated Doors",
    ],
    slug: "/products/doors",
    button: "Explore Doors",
  },

  {
    title: "Window Solutions",
    description:
      "Guidance for choosing windows that deliver ventilation, appearance, and long-term performance.",
    points: [
      "WPC Windows",
      "uPVC Windows",
      "Sliding Windows",
      "Casement Windows",
    ],
    slug: "/products/windows",
    button: "Explore Windows",
  },

  {
    title: "Frame Solutions",
    description:
      "Recommendations for durable frame systems that ensure compatibility and structural reliability.",
    points: [
      "WPC Frames",
      "Waterproof Frames",
      "Heavy-Duty Frames",
    ],
    slug: "/products/frames",
    button: "Explore Frames",
  },

  {
    title: "Custom Project Solutions",
    description:
      "Tailored support for unique project requirements, custom specifications, and large-scale developments.",
    points: [
      "Product Selection",
      "Custom Sizes",
      "Special Requirements",
      "Large-Scale Orders",
      "Design Coordination",
    ],
    slug: "/contact",
    button: "Discuss Your Project",
  },

  {
    title: "Bulk Supply Services",
    description:
      "Reliable supply support for builders, contractors, developers, institutions, and commercial projects.",
    points: [
      "Consistent Product Availability",
      "Competitive Pricing",
      "Project-Based Planning",
      "Professional Support",
    ],
    slug: "/contact",
    button: "Request Bulk Quote",
  },

  {
    title: "Installation Guidance",
    description:
      "Practical recommendations to help ensure proper installation and long-term product performance.",
    points: [
      "Product Preparation",
      "Installation Recommendations",
      "Maintenance Guidelines",
    ],
    slug: "/contact",
    button: "Get Assistance",
  },
];

export default function OurServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          Professional Services Tailored to Your Needs
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-[32px] p-8"
            >
              <h3 className="text-3xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-neutral-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.points.map((point) => (
                  <li key={point}>
                    ✓ {point}
                  </li>
                ))}
              </ul>

              <Button href={service.slug}>
                {service.button}
              </Button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}