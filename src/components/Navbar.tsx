import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { brand, navLinks } from "@/lib/constants";
import logoIcon from "@/app/icon.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-maroon/10 bg-cream/92 backdrop-blur">
      <div className="border-b border-maroon/10 bg-maroon px-5 py-2 text-cream sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs font-bold uppercase tracking-[0.14em] sm:justify-end">
          <a
            className="inline-flex items-center gap-2 transition hover:text-gold"
            href={`tel:${brand.phonePrimary}`}
          >
            <Phone size={14} /> {brand.phonePrimaryDisplay}
          </a>
          <a
            className="inline-flex items-center gap-2 transition hover:text-gold"
            href={`tel:${brand.phoneSecondary}`}
          >
            <Phone size={14} /> {brand.phoneSecondaryDisplay}
          </a>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex size-12 items-center justify-center overflow-hidden rounded-2xl border border-gold/40 bg-cream/90 p-1.5 shadow-[0_10px_24px_rgba(113,40,45,0.12)] ring-1 ring-white/60 transition group-hover:scale-[1.02]">
            <Image
              src={logoIcon}
              alt=""
              aria-hidden="true"
              className="h-full w-full rounded-[0.65rem] object-cover"
              priority
            />
          </span>
          <span>
            <span className="block font-serif text-xl font-semibold leading-none text-maroon">
              {brand.name}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green">
              {brand.category}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-[0.14em] text-ink/70 transition hover:text-maroon"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${brand.phonePrimary}`}
            aria-label="Call Seema R Jain"
            className="grid size-11 place-items-center rounded-full border border-maroon/15 bg-white text-maroon transition hover:border-maroon/35"
          >
            <Phone size={18} />
          </a>
          <a
            href={`https://wa.me/${brand.whatsappPrimary}?text=${encodeURIComponent(
              "Hi Seema, I'd like to book Vastu checking and consultation.",
            )}`}
            aria-label="Book on WhatsApp"
            className="grid size-11 place-items-center rounded-full shadow-sm transition hover:scale-110"
          >
            <WhatsAppIcon className="size-full" />
          </a>
        </div>
      </nav>
    </header>
  );
}
