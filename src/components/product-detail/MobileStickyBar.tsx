import Link from "next/link";

interface MobileStickyBarProps {
  whatsappMessage: string;
}

export default function MobileStickyBar({
  whatsappMessage,
}: MobileStickyBarProps) {
  const whatsappUrl =
    `https://wa.me/919846083216?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        bg-white/95
        backdrop-blur-md
        border-t
        md:hidden
      "
    >
      <div className="p-4">

        <div className="grid grid-cols-2 gap-3">

          <Link
            href="tel:+919846083216"
            className="
              h-12
              rounded-xl
              border
              flex
              items-center
              justify-center
              font-medium
              text-sm
            "
          >
            Call Now
          </Link>

          <Link
            href={whatsappUrl}
            className="
              h-12
              rounded-xl
              bg-black
              text-white
              flex
              items-center
              justify-center
              font-medium
              text-sm
            "
          >
            WhatsApp Inquiry
          </Link>

        </div>

      </div>
    </div>
  );
}