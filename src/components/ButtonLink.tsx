import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

const variants = {
  primary:
    "bg-maroon text-cream shadow-[0_14px_35px_rgba(122,31,43,0.22)] hover:bg-[#651823]",
  secondary:
    "bg-green text-cream shadow-[0_14px_35px_rgba(31,78,61,0.18)] hover:bg-[#193f32]",
  ghost:
    "border border-maroon/20 bg-cream/70 text-maroon hover:border-maroon/40 hover:bg-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:");
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] transition ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a className={classes} href={href} {...(props as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
