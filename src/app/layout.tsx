import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { brand, localBusinessJsonLd } from "@/lib/constants";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://navgrahbyraani.com"),
  title: {
    default: `${brand.name} | Vastu Consultant by Seema R Jain`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Book Vastu checking and consultation, aura, chakra, numerology, and birth chart consultation with Seema R Jain at Navgrah by Raani.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: `${brand.name} | ${brand.tagline}`,
    description:
      "Warm, practical Vastu checking and consultation plus energy guidance for peaceful homes, positive energy, better focus, and prosperity.",
    type: "website",
    images: ["/images/serene-interior.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
