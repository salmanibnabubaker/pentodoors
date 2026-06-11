interface ProductOptionsProps {
  options?: {
    finishes?: string[];
    sizes?: string[];
    designs?: string[];
  };
}

export default function ProductOptions({
  options,
}: ProductOptionsProps) {
  if (!options) return null;

  return (
    <div className="pt-8">

      <h3 className="text-xl font-semibold mb-6">
        Available Options
      </h3>

      <div className="space-y-6">

        {options.finishes && (
          <div>
            <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-3">
              Finishes
            </h4>

            <div className="flex flex-wrap gap-2">
              {options.finishes.map((finish) => (
                <span
                  key={finish}
                  className="
                    px-3
                    py-2
                    rounded-full
                    bg-neutral-100
                    text-sm
                  "
                >
                  {finish}
                </span>
              ))}
            </div>
          </div>
        )}

        {options.sizes && (
          <div>
            <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-3">
              Sizes
            </h4>

            <div className="flex flex-wrap gap-2">
              {options.sizes.map((size) => (
                <span
                  key={size}
                  className="
                    px-3
                    py-2
                    rounded-full
                    bg-neutral-100
                    text-sm
                  "
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {options.designs && (
          <div>
            <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-3">
              Designs
            </h4>

            <div className="flex flex-wrap gap-2">
              {options.designs.map((design) => (
                <span
                  key={design}
                  className="
                    px-3
                    py-2
                    rounded-full
                    bg-neutral-100
                    text-sm
                  "
                >
                  {design}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}