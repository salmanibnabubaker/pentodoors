import FadeUp from "./FadeUp";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <FadeUp>
      <div className="max-w-3xl mb-16">

        {eyebrow && (
          <p className="uppercase tracking-[3px] text-neutral-500 mb-4">
            {eyebrow}
          </p>
        )}

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h2>

        {description && (
          <p className="text-lg text-neutral-600">
            {description}
          </p>
        )}

      </div>
    </FadeUp>
  );
}