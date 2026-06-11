interface ProductFeaturesProps {
  features: string[];
}

export default function ProductFeatures({
  features,
}: ProductFeaturesProps) {
  return (
    <div className="border-t pt-8">

      <h3 className="text-xl font-semibold mb-5">
        Key Features
      </h3>

      <div className="grid sm:grid-cols-2 gap-3">

        {features.map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-center
              gap-3
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

    </div>
  );
}