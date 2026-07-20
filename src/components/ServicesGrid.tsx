import { services } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Reveal key={service.title} delay={index * 0.04}>
            <article className="h-full rounded-md border border-maroon/10 bg-white p-6 shadow-[0_18px_45px_rgba(73,38,25,0.07)] transition hover:-translate-y-1 hover:border-gold/50">
              <div className="mb-5 grid size-12 place-items-center rounded-full bg-green text-cream">
                <Icon size={22} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-maroon">
                {service.title}
              </h3>
              <p className="mt-2 font-semibold text-green">{service.summary}</p>
              {detailed && (
                <p className="mt-4 leading-7 text-ink/72">{service.details}</p>
              )}
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
