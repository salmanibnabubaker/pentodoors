import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919846083216"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl animate-pulse hover:animate-none hover:scale-110 transition-all"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
}