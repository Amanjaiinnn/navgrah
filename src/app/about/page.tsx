import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, HeartHandshake, Sparkles } from "lucide-react";
import { ContactPanel } from "@/components/ContactPanel";
import { Section } from "@/components/Section";
import { brand } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Seema R Jain",
  description:
    "Learn about Seema R Jain's warm and practical approach to Vastu checking and consultation, aura, chakra, numerology, and birth chart consultation.",
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="A warm, practical approach to positive spaces via Astrovastu."
        intro="Navgrah by Raani is led by Seema R Jain, offering guidance that blends traditional Vastu wisdom with personal energy work in a way that feels grounded and easy to apply."
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-md">
            <Image
              src="/images/serene-interior.jpg"
              alt="Peaceful home interior with warm sunlight"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid content-center gap-6">
            <p className="font-serif text-3xl leading-tight text-maroon">
              &quot;{brand.heroQuote}&quot;
            </p>
            <p className="text-lg leading-8 text-ink/75">
              Seema ji&apos;s consultations are designed for people who want clear,
              kind, and actionable guidance. Whether the concern is a home that
              feels unsettled, a business space that needs better flow, or a
              personal energy pattern that needs attention, the goal is to help
              you move forward with confidence.
            </p>
            <p className="text-lg leading-8 text-ink/75">
              The work covers Vastu checking and consultation, aura and chakra
              checking, name and mobile number correction, and birth chart
              checking. Each session keeps the guidance personal, respectful,
              and practical for everyday life.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Philosophy" title="Guidance that fits your life.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: HeartHandshake,
              title: "Patient Listening",
              text: "Every recommendation begins with your actual situation, not a generic checklist.",
            },
            {
              icon: BadgeCheck,
              title: "Practical Remedies",
              text: "The focus stays on clear, doable steps that support peace, health, prosperity, and balance.",
            },
            {
              icon: Sparkles,
              title: "Positive Energy",
              text: "The consultation helps you understand how your space and personal energy can support each other.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border-t-4 border-gold bg-cream/70 p-6">
                <Icon className="mb-5 text-maroon" size={30} />
                <h2 className="font-serif text-2xl font-semibold text-maroon">
                  {item.title}
                </h2>
                <p className="mt-3 leading-7 text-ink/70">{item.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Connect" title="Speak with Seema R Jain.">
        <ContactPanel />
      </Section>
    </>
  );
}
