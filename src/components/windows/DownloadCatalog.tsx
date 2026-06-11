import Button from "../shared/Button";

export default function DownloadWindowCatalog() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="rounded-[32px] border p-12 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Browse Our Complete Window Collection
          </h2>

          <p className="text-neutral-600 mb-8">
            Download our latest catalog to explore
            available designs, specifications,
            finishes, and customization options.
          </p>

          <Button href="#">
            Download Window Catalog
          </Button>

        </div>

      </div>

    </section>
  );
}