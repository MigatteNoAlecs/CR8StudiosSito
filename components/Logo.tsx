import { LOGO, LOGO_CR8 } from "@/lib/content";

type LogoVariant = "nav" | "hero" | "loader" | "footer";

const config: Record<
  LogoVariant,
  { src: string; alt: string; className: string }
> = {
  nav: {
    src: LOGO_CR8,
    alt: "CR8",
    className: "h-8 w-auto sm:h-9",
  },
  hero: {
    src: LOGO,
    alt: "CR8 Studios",
    className: "h-[4.25rem] w-auto sm:h-24 lg:h-[5.5rem]",
  },
  loader: {
    src: LOGO,
    alt: "CR8 Studios",
    className: "mx-auto h-[4.5rem] w-auto sm:h-24 md:h-28",
  },
  footer: {
    src: LOGO_CR8,
    alt: "CR8",
    className: "h-7 w-auto sm:h-8",
  },
};

export function Logo({
  variant = "nav",
  priority = false,
}: {
  variant?: LogoVariant;
  priority?: boolean;
}) {
  const { src, alt, className } = config[variant];

  return (
    <img
      src={src}
      alt={alt}
      width={variant === "nav" || variant === "footer" ? 180 : 380}
      height={variant === "nav" || variant === "footer" ? 76 : 84}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`block shrink-0 select-none ${className}`}
    />
  );
}
