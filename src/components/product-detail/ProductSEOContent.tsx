interface ProductSEOContentProps {
  seoContent?: string;
}

export default function ProductSEOContent({
  seoContent,
}: ProductSEOContentProps) {
  if (!seoContent) return null;

  return (
    <section className="py-20">
      <div className="container-custom">

        <div className="max-w-4xl">

          <p
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-neutral-500
              mb-3
            "
          >
            Product Information
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              mb-8
            "
          >
            Additional Details
          </h2>

          <div
            className="
              prose
              prose-neutral
              max-w-none
              text-neutral-600
            "
          >
            {seoContent
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
}