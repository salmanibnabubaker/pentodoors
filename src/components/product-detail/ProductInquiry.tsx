import Button from "../shared/Button";

interface ProductInquiryProps {
  productName: string;
  whatsappMessage: string;
}

export default function ProductInquiry({
  productName,
  whatsappMessage,
}: ProductInquiryProps) {
  const whatsappUrl =
    `https://wa.me/919846083216?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <div
      className="
        border-t
        pt-8
      "
    >
      <div
        className="
          rounded-3xl
          border
          bg-neutral-50
          p-6
        "
      >
        <h3
          className="
            text-xl
            font-semibold
            mb-3
          "
        >
          Interested in {productName}?
        </h3>

        <p
          className="
            text-neutral-600
            text-sm
            mb-6
          "
        >
          Get pricing, available sizes,
          customization options, delivery
          information, and expert guidance.
        </p>

        <div className="space-y-2 mb-6">

          <div>✓ Pricing Information</div>

          <div>✓ Available Sizes</div>

          <div>✓ Customization Options</div>

          <div>✓ Delivery Information</div>

        </div>

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