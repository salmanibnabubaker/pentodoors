import Button from "../shared/Button";

export default function DownloadCatalog() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="rounded-[32px] border p-12 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Browse Our Complete Frame Collection
          </h2>

          <p className="text-neutral-600 mb-8">
            Download our latest catalog to explore
            frame designs, specifications, finishes,
            and installation options.
          </p>

          <Button href="#">
            Download Frame Catalog
          </Button>

        </div>

      </div>

    </section>
  );
}