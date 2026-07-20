import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactPanel } from "@/components/ContactPanel";
import { Section } from "@/components/Section";
import { brand } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Seema R Jain for Vastu, aura, chakra, numerology, and birth chart consultation.",
};

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Book a consultation with Seema R Jain."
        intro="Share a few details and choose the service you are interested in. You can also call or WhatsApp directly for the fastest response."
      >
        <div className="grid overflow-hidden rounded-md border border-maroon/10 bg-white md:grid-cols-[0.9fr_1.1fr]">
          <ContactPanel />
          <div className="p-5 md:p-8">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Location"
        title="Visit us in Agra."
        intro={brand.address}
        className="bg-white"
      >
        <div className="overflow-hidden rounded-md border border-maroon/10 shadow-[0_20px_55px_rgba(73,38,25,0.08)]">
          <iframe
            allowFullScreen
            className="h-[360px] w-full border-0 md:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={brand.googleMapsEmbedUrl}
            title={`${brand.name} location map`}
          />
        </div>
        <a
          className="mt-5 inline-flex items-center text-sm font-bold uppercase tracking-[0.14em] text-maroon transition hover:text-green"
          href={brand.googleMapsUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open in Google Maps
        </a>
      </Section>
    </>
  );
}
