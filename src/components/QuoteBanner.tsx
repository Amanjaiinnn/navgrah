import { brand } from "@/lib/constants";

export function QuoteBanner() {
  return (
    <section className="bg-green px-5 py-14 text-cream sm:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
          Navgrah by Raani
        </p>
        <blockquote className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-5xl">
          &quot;{brand.supportingQuote}&quot;
        </blockquote>
      </div>
    </section>
  );
}
