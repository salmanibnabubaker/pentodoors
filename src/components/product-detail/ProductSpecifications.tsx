interface ProductSpecificationsProps {
  specifications: {
    label: string;
    value: string;
  }[];
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  return (
    <div className="pt-8">

      <h3 className="text-xl font-semibold mb-6">
        Specifications
      </h3>

      <div
        className="
          overflow-hidden
          border
          bg-white
        "
      >
        {specifications.map((spec, index) => (
          <div
            key={spec.label}
            className={`
              grid
              grid-cols-[140px_1fr]
              gap-2
              p-4
              ${
                index !== specifications.length - 1
                  ? "border-b"
                  : ""
              }
            `}
          >
            <span
              className="
                text-sm
                font-medium
                text-neutral-500
              "
            >
              {spec.label}
            </span>

            <span
              className="
                text-sm
                text-neutral-800
              "
            >
              {spec.value}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}