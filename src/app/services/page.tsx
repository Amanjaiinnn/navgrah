import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteBanner } from "@/components/QuoteBanner";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { brand } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Vastu checking and consultation, aura checking, chakras checking, name and mobile number correction, and birth chart checking.",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="Five clear ways to bring alignment into your space and life."
        intro="Choose the service that best matches your present question. If you are unsure where to start, WhatsApp with a short note and Seema ji can guide you to the right consultation."
        >
        <ServicesGrid detailed />
      </Section>

      <QuoteBanner />

      <Section
        eyebrow="Booking"
        title="Ready to begin with a consultation?"
        intro={`Call ${brand.phonePrimaryDisplay} or send a WhatsApp message with your name, city, and the service you are interested in.`}
        className="bg-white"
      >
        <ButtonLink
          href={`https://wa.me/${brand.whatsappPrimary}?text=${encodeURIComponent(
            "Hi Seema, I'd like to book Vastu checking and consultation.",
          )}`}
        >
          <WhatsAppIcon size={18} /> Book on WhatsApp
        </ButtonLink>
      </Section>
    </>
  );
}
