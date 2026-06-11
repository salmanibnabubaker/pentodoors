const advantages = [
  {
    title: "Expert Guidance",
    description:
      "Receive recommendations tailored to your project requirements, preferences, and budget.",
  },

  {
    title: "Premium Product Range",
    description:
      "Access high-quality doors, windows, and frames designed for modern living and long-term performance.",
  },

  {
    title: "Customer-Focused Support",
    description:
      "Enjoy dedicated assistance from the initial inquiry through project completion.",
  },

  {
    title: "Reliable Performance",
    description:
      "Products selected for durability, functionality, appearance, and lasting value.",
  },

  {
    title: "Future-Ready Solutions",
    description:
      "Prepared to support expanding interior solution requirements as your needs evolve.",
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <h2 className="text-5xl font-bold mb-16">
          The Pentodoors Advantage
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {advantages.map((item) => (
            <div
              key={item.title}
              className="border rounded-[24px] p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}