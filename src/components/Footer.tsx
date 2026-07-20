import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand, navLinks } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-maroon px-5 py-12 text-cream sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <p className="font-serif text-3xl font-semibold">{brand.name}</p>
          <p className="mt-2 max-w-md text-cream/75">{brand.tagline}</p>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-gold">
            {brand.closingLine}
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Quick Links
          </p>
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/78 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Contact
          </p>
          <div className="grid gap-3 text-cream/82">
            <a className="flex items-center gap-3" href={`tel:${brand.phonePrimary}`}>
              <Phone size={17} /> {brand.phonePrimaryDisplay}
            </a>
            <a className="flex items-center gap-3" href={`tel:${brand.phoneSecondary}`}>
              <Phone size={17} /> {brand.phoneSecondaryDisplay}
            </a>
            <a className="flex items-center gap-3" href={`mailto:${brand.email}`}>
              <Mail size={17} /> {brand.email}
            </a>
            <a
              className="flex items-center gap-3"
              href={`https://wa.me/${brand.whatsappPrimary}`}
            >
              <WhatsAppIcon size={17} /> WhatsApp consultation
            </a>
            <a
              className="flex items-start gap-3 transition hover:text-white"
              href={brand.googleMapsUrl}
              rel="noreferrer"
              target="_blank"
            >
              <MapPin className="mt-1 shrink-0" size={17} /> {brand.address}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-cream/15 pt-6 text-sm text-cream/65">
        Copyright {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
