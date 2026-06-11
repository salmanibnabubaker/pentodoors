import Button from "../shared/Button";

export default function DownloadCatalog() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="rounded-[32px] border p-12 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Explore Our Complete Door Collection
          </h2>

          <p className="text-neutral-600 mb-8">
            Download our latest catalog to browse
            designs, specifications, finishes,
            and available options.
          </p>

          <Button href="#">
            Download Door Catalog
          </Button>

        </div>

      </div>

    </section>
  );
}