import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ContactPanel } from "@/components/ContactPanel";
import { Hero } from "@/components/Hero";
import { QuoteBanner } from "@/components/QuoteBanner";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { brand } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="About Seema R Jain"
        title={brand.heroQuote}
        intro="Seema R Jain brings a warm, practical approach to Vastu checking and consultation, aura, chakra, numerology, and birth chart guidance. Every consultation is designed to make your space and personal energy feel more aligned, peaceful, and supportive."
        className="bg-white"
      >
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-maroon"
        >
          Read Seema&apos;s Story <ArrowRight size={17} />
        </Link>
      </Section>

      <Section
        eyebrow="Services"
        title="Guidance for space, energy, numbers, and clarity."
        intro="Each service has a clear purpose, practical recommendations, and a simple way to begin."
      >
        <ServicesGrid />
        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-maroon"
          >
            View Service Details <ArrowRight size={17} />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Why Choose Us"
        title="Small shifts can change how a space feels every day."
        className="bg-white"
      >
        <WhyChooseUs />
      </Section>

      <QuoteBanner />

      <Section
        eyebrow="Testimonials"
        title="Early words from consultation clients."
        intro="Real client testimonials can be expanded here as more reviews are collected."
      >
        <Testimonials />
      </Section>

      <Section eyebrow="Book" title="Start with one simple message." className="bg-white">
        <div className="grid overflow-hidden rounded-md border border-maroon/10 md:grid-cols-[0.9fr_1.1fr]">
          <ContactPanel />
          <div className="p-5 md:p-8">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
