import { brand } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function StickyWhatsApp() {
  return (
    <a
      href={`https://wa.me/${brand.whatsappPrimary}?text=${encodeURIComponent(
        "Hi Seema, I'd like to book Vastu checking and consultation.",
      )}`}
      className="whatsapp-float fixed bottom-5 right-5 z-50 grid size-16 place-items-center rounded-full transition hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/35"
      aria-label="Book a consultation on WhatsApp"
    >
      <WhatsAppIcon className="size-full drop-shadow-[0_18px_35px_rgba(37,211,102,0.34)]" />
    </a>
  );
}
