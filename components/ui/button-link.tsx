import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "darkSecondary";
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-ink text-white hover:bg-ink/90 focus-visible:outline-ink",

    secondary:
      "border border-ink/20 text-ink hover:bg-ink/5 focus-visible:outline-ink",

    light:
      "bg-white text-ink hover:bg-white/90 focus-visible:outline-white",

    // ✅ NEW (for dark sections like CTA)
    darkSecondary:
      "border border-white/30 text-white bg-white/10 hover:bg-white/20 focus-visible:outline-white"
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold leading-none transition 
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
      ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}