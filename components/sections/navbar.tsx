import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Benchmarks", href: "#benchmarks" },
  { label: "Reasoning", href: "#reasoning" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/78 backdrop-blur-2xl">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3 lg:min-h-[4.5rem]">
        <a
          href="#"
          className="flex shrink-0 items-center gap-3 text-base font-semibold text-ink transition hover:text-ocean"
          aria-label="GPT-5.5 home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-semibold leading-none text-white shadow-[0_10px_30px_rgba(17,17,17,0.16)]">
            G
          </span>
          <span>GPT-5.5</span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium leading-5 text-ink/58 transition hover:bg-white/70 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 sm:block">
          <ButtonLink href="#cta" className="min-h-10 px-4 sm:px-5">
            Get Started
          </ButtonLink>
        </div>
      </Container>

      <div className="border-t border-ink/10 bg-paper/92 shadow-[0_16px_40px_rgba(17,17,17,0.05)] md:hidden">
        <Container className="flex gap-2 overflow-x-auto py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium leading-5 text-ink/58 transition hover:bg-white/70 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean"
            >
              {link.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}
