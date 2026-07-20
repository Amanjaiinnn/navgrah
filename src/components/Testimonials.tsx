import { testimonials } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Reveal key={testimonial.name} delay={index * 0.05}>
          <figure className="h-full rounded-md border border-gold/25 bg-white p-6 shadow-[0_18px_45px_rgba(73,38,25,0.07)]">
            <blockquote className="font-serif text-2xl leading-8 text-maroon">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <figcaption className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-green">
              {testimonial.name}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
