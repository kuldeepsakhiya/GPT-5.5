import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-ink text-white hover:bg-ocean data-[theme=light]:bg-white data-[theme=light]:text-black",
    secondary:
      "border border-ink/15 bg-white/70 text-ink hover:border-ocean/50 hover:text-ocean focus-visible:outline-ocean"
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold leading-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-6 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
