import { Container } from "@/components/ui/container";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Use cases", href: "#use-cases" },
      { label: "Benchmarks", href: "#benchmarks" },
      { label: "Reasoning", href: "#reasoning" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "mailto:hello@example.com" },
      { label: "Careers", href: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "API status", href: "#" },
      { label: "Security", href: "#" }
    ]
  }
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" }
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <Container className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16">
        <div className="max-w-sm">
          <a
            href="#"
            className="flex items-center gap-3 text-base font-semibold text-ink transition hover:text-ocean"
            aria-label="GPT-5.5 home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-semibold leading-none text-white">
              G
            </span>
            <span>GPT-5.5</span>
          </a>
          <p className="mt-5 text-sm leading-6 text-ink/58">
            A new class of intelligence for coding, research, automation, and
            real-world productivity.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid gap-8 sm:grid-cols-3"
        >
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold leading-6 text-ink">
                {section.title}
              </h2>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-ink/62">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a className="transition hover:text-ocean" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      <div className="border-t border-ink/10">
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-ink/58">
            © 2026 GPT-5.5. All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium leading-6 text-ink/62">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a className="transition hover:text-ocean" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
