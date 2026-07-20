import {
  Activity,
  BadgeCheck,
  Brain,
  HeartPulse,
  Home,
  Leaf,
  Phone,
  Sparkles,
  Star,
  Target,
  UserRound,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const phonePrimary = process.env.NEXT_PUBLIC_PHONE_1 || "9837556611";
const phoneSecondary = process.env.NEXT_PUBLIC_PHONE_2 || "9568551133";
const whatsappPrimary =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_1 || "919837556611";
const whatsappSecondary =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_2 || "919568551133";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "raanijain15@gmail.com";
const address =
  "Flat no 203, Antram JSR Glory, Paschimpuri, Near Khyati Hospital - Agra";
const googleMapsUrl = "https://maps.app.goo.gl/cjH4NSxN3NwEzfmB8";
const googleMapsMarkerQuery = `Navgrah by Raani, ${address}`;
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  googleMapsMarkerQuery,
)}&output=embed`;

export const brand = {
  name: "Navgrah by Raani",
  consultant: "Seema R Jain",
  category: "Vastu | Aura | Positivity",
  tagline: "Align Your Space. Elevate Your Life.",
  heroQuote: "Good Energy is the Start of a Beautiful Life.",
  supportingQuote: "A little alignment today, a lifetime of happiness tomorrow.",
  closingLine:
    "Let's create a space full of positivity, prosperity & happiness!",
  email: contactEmail,
  phonePrimary,
  phonePrimaryDisplay: "98375 56611",
  phoneSecondary,
  phoneSecondaryDisplay: "95685 51133",
  whatsappPrimary,
  whatsappSecondary,
  address,
  googleMapsUrl,
  googleMapsMarkerQuery,
  googleMapsEmbedUrl,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Vastu Checking & Consultation",
    summary: "Balance your space with practical Vastu guidance.",
    icon: Home,
    details:
      "A combined review and consultation for your home, office, shop, or plot layout to identify areas that may be blocking harmony, growth, or peace. The session can include room placement, direction-based recommendations, energy flow, and practical remedies that can be started without major structural changes.",
  },
  {
    title: "Aura Checking",
    summary: "Cleanse, balance & strengthen your aura.",
    icon: Sparkles,
    details:
      "A gentle energy reading to understand the present state of your aura and where it may need care. The consultation focuses on cleansing, strengthening, and restoring a more positive personal energy field.",
  },
  {
    title: "Chakras Checking",
    summary: "Awaken your energy centers.",
    icon: Activity,
    details:
      "A chakra-focused review to understand which energy centers may feel blocked, low, or imbalanced. You receive supportive guidance for balance, focus, emotional steadiness, and overall well-being.",
  },
  {
    title: "Name & Mobile No. Correction",
    summary: "Correct today, align your tomorrow.",
    icon: Target,
    details:
      "A numerology-informed review of your name and mobile number to understand their energetic influence. Suggestions are shared with care so the correction feels practical, respectful, and easy to apply.",
  },
  {
    title: "Checking Birth Chart",
    summary: "Gain clarity, plan your path.",
    icon: Star,
    details:
      "A birth-chart review for clarity around timing, strengths, recurring patterns, and important life decisions. The guidance is framed in simple language so you can plan your path with more confidence.",
  },
];

export const whyChooseUs = [
  {
    title: "Peaceful Home",
    icon: Leaf,
    text: "Create calmer rooms, smoother routines, and a more settled feeling at home.",
  },
  {
    title: "Positive Energy",
    icon: Sparkles,
    text: "Invite warmth, clarity, and renewed optimism into the spaces you use daily.",
  },
  {
    title: "Better Health & Prosperity",
    icon: HeartPulse,
    text: "Support well-being, focus, and growth with thoughtful energy alignment.",
  },
  {
    title: "Focused & Balanced Life",
    icon: Brain,
    text: "Bring direction to decisions, work, relationships, and personal energy.",
  },
];

export const testimonials = [
  {
    name: "Client from Meerut",
    quote:
      "The guidance was practical and easy to follow. Our home started feeling lighter within a few days.",
  },
  {
    name: "Business Owner",
    quote:
      "Seema ji explained every suggestion patiently and gave simple remedies for our office space.",
  },
  {
    name: "Family Consultation",
    quote:
      "The consultation helped us understand how small changes can bring more peace and positivity.",
  },
];

export const contactOptions = [
  {
    label: "Call Primary",
    href: `tel:${brand.phonePrimary}`,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${brand.whatsappPrimary}?text=${encodeURIComponent(
      "Hi Seema, I'd like to book Vastu checking and consultation.",
    )}`,
    icon: WhatsAppIcon,
  },
  {
    label: "Meet Seema R Jain",
    href: "/about",
    icon: UserRound,
  },
  {
    label: "View Services",
    href: "/services",
    icon: BadgeCheck,
  },
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: brand.name,
  founder: brand.consultant,
  description:
    "Vastu checking and consultation, aura, chakra, numerology, and birth chart consultation by Seema R Jain.",
  email: brand.email,
  telephone: `+91${brand.phonePrimary}`,
  address: brand.address,
  hasMap: brand.googleMapsUrl,
  image: "/images/serene-interior.jpg",
  areaServed: "India",
  url: "https://navgrahbyraani.com",
  sameAs: [],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
    },
  })),
};
