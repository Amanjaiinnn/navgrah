import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`px-5 py-16 sm:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl font-semibold leading-tight text-maroon sm:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-lg leading-8 text-ink/75">{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
