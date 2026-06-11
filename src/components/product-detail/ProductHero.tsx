import Button from "../shared/Button";

interface ProductHeroProps {
  name: string;
  category: string;
  badge: string;
  shortDescription: string;
  features: string[];
  whatsappMessage: string;
}

export default function ProductHero({
  name,
  category,
  badge,
  shortDescription,
  features,
  whatsappMessage,
}: ProductHeroProps) {
  const whatsappUrl =
    `https://wa.me/919846083216?text=${encodeURIComponent(
      whatsappMessage
    )}`;
  return (
    <div>

      <div className="flex items-center gap-3 mb-4">

        <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          {category}
        </span>

        <span className="w-1 h-1 rounded-full bg-neutral-300" />

        <span
          className="
            text-xs
            font-medium
            px-3
            py-1
            rounded-full
            bg-neutral-100
            text-neutral-700
          "
        >
          {badge}
        </span>

      </div>

      <h1
        className="
          text-4xl
          md:text-5xl
          font-bold
          leading-tight
          tracking-tight
          mb-5
        "
      >
        {name}
      </h1>

      <p
        className="
          text-lg
          text-neutral-600
          leading-relaxed
          mb-8
        "
      >
        {shortDescription}
      </p>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-3
          mb-10
        "
      >
        {features.slice(0, 6).map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-center
              gap-3
              text-sm
              text-neutral-700
            "
          >
            <span className="text-black">
              ✓
            </span>

            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div
        className="
          bg-white
          rounded-3xl
          p-6
          bg-neutral-50
        "
      >
        <h3
          className="
            font-semibold
            text-lg
            mb-2
          "
        >
          Interested in this product?
        </h3>

        <p
          className="
            text-sm
            text-neutral-600
            mb-6
          "
        >
          Get pricing, customization options,
          delivery information, and expert guidance.
        </p>

        <div className="flex flex-wrap gap-3">

          <Button href={whatsappUrl}>
            WhatsApp Inquiry
          </Button>

          <Button
            href="/contact"
            variant="secondary"
          >
            Request Quote
          </Button>

        </div>

      </div>

    </div>
  );
}