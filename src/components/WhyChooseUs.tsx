import { whyChooseUs } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";

export function WhyChooseUs() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {whyChooseUs.map((item, index) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.title} delay={index * 0.04}>
            <div className="h-full border-l-4 border-gold bg-cream/65 p-6">
              <Icon className="mb-5 text-maroon" size={30} />
              <h3 className="font-serif text-2xl font-semibold text-maroon">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-ink/70">{item.text}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
