import Image from "next/image";

interface Props {
  title: string;
  content: string;
  image: string;
  reverse?: boolean;
}

export default function AboutSection({
  title,
  content,
  image,
  reverse,
}: Props) {
  return (
    <section className="section-padding">

      <div
        className={`container-custom grid lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>

          <h2 className="text-4xl font-bold mb-6">
            {title}
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed whitespace-pre-line">
            {content}
          </p>

        </div>

        <Image
          src={image}
          alt={title}
          width={1000}
          height={800}
          className="rounded-[24px]"
        />

      </div>

    </section>
  );
}