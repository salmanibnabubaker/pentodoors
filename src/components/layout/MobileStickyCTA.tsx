export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t z-40">

      <div className="grid grid-cols-3">

        <a
          href="https://wa.me/919846083216"
          className="p-4 text-center"
        >
          WhatsApp
        </a>

        <a
          href="tel:+919846083216"
          className="p-4 text-center"
        >
          Call
        </a>

        <a
          href="/contact"
          className="p-4 text-center"
        >
          Quote
        </a>

      </div>

    </div>
  );
}