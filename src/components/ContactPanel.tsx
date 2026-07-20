import { Mail, Phone } from "lucide-react";
import { brand } from "@/lib/constants";
import { ButtonLink } from "@/components/ButtonLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function ContactPanel() {
  return (
    <div className="bg-maroon p-6 text-cream md:p-8">
      <p className="font-serif text-3xl font-semibold">Contact {brand.consultant}</p>
      <p className="mt-3 leading-7 text-cream/76">
        Choose the fastest path for you: call, WhatsApp, or send a short form
        request. Consultations are available for homes, offices, shops, and
        personal energy guidance.
      </p>
      <div className="mt-7 grid gap-4">
        <a className="flex items-center gap-3" href={`tel:${brand.phonePrimary}`}>
          <Phone size={18} /> {brand.phonePrimaryDisplay}
        </a>
        <a className="flex items-center gap-3" href={`tel:${brand.phoneSecondary}`}>
          <Phone size={18} /> {brand.phoneSecondaryDisplay}
        </a>
        <a className="flex items-center gap-3" href={`mailto:${brand.email}`}>
          <Mail size={18} /> {brand.email}
        </a>
      </div>
      <div className="mt-8">
        <ButtonLink
          href={`https://wa.me/${brand.whatsappPrimary}?text=${encodeURIComponent(
            "Hi Seema, I'd like to book Vastu checking and consultation.",
          )}`}
          variant="secondary"
          className="bg-gold text-maroon hover:bg-[#d9b33a]"
        >
          <WhatsAppIcon size={18} /> WhatsApp Now
        </ButtonLink>
      </div>
    </div>
  );
}
