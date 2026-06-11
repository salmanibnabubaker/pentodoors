export function createWhatsappLink(
  message: string
) {
  const phone = "919999999999";

  return `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;
}