import Image from "next/image";
import { Phone, Sparkles } from "lucide-react";
import { brand } from "@/lib/constants";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream px-5 pb-14 pt-10 sm:px-8 lg:pb-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(90deg,rgba(122,31,43,0.1),rgba(201,162,39,0.18),rgba(31,78,61,0.1))]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/45 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-green">
              <Sparkles size={15} /> {brand.category}
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.02] text-maroon sm:text-6xl lg:text-7xl">
              Vastu Consultant - {brand.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-ink/78">
              {brand.tagline} Personal guidance for Vastu, aura, chakras,
              numerology, and birth chart clarity with {brand.consultant}.
            </p>
            <blockquote className="mt-6 border-l-4 border-gold pl-5 font-serif text-2xl italic text-green">
              &quot;{brand.heroQuote}&quot;
            </blockquote>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={`https://wa.me/${brand.whatsappPrimary}?text=${encodeURIComponent(
                  "Hi Seema, I'd like to book Vastu checking and consultation.",
                )}`}
              >
                <WhatsAppIcon size={18} /> Book a Consultation
              </ButtonLink>
              <ButtonLink href={`tel:${brand.phonePrimary}`} variant="ghost">
                <Phone size={18} /> Call Now
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative min-h-[430px] overflow-hidden rounded-md border border-gold/30 shadow-[0_30px_80px_rgba(73,38,25,0.18)]">
            <Image
              src="/images/photo.png"
              alt="Sunlit peaceful home interior for Vastu consultation"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(122,31,43,0.06),rgba(122,31,43,0.48))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
              <p className="max-w-md font-serif text-3xl font-semibold">
                A little alignment today, a lifetime of happiness tomorrow.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
