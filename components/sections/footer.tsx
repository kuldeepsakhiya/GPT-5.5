import { BrandMark } from "@/components/icons/site-icons";
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
  <footer className="relative border-t border-ink/10 bg-gradient-to-b from-white to-gray-50">
    
    <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.1fr_1.4fr] lg:gap-20">
      
      {/* Brand */}
      <div className="max-w-sm">
        <a
          href="#"
          className="flex items-center gap-3 text-base font-semibold text-ink transition hover:text-ocean"
          aria-label="GPT-5.5 home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white shadow-sm">
            <BrandMark />
          </span>
          <span className="text-lg tracking-tight">GPT-5.5</span>
        </a>

        <p className="mt-5 text-sm leading-relaxed text-ink/60">
          A new class of intelligence for coding, research, automation, and
          real-world productivity.
        </p>

        {/* Optional trust line */}
        <p className="mt-4 text-xs text-ink/40">
          Built for developers, teams, and businesses worldwide
        </p>
      </div>

      {/* Links */}
      <nav
        aria-label="Footer navigation"
        className="grid gap-8 sm:grid-cols-3"
      >
        {footerSections.map((section) => (
          <div key={section.title}>
            
            <h2 className="text-sm font-semibold tracking-wide text-ink">
              {section.title}
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-ink/60">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    className="group inline-flex items-center transition hover:text-ocean"
                    href={link.href}
                  >
                    {link.label}

                    {/* subtle arrow */}
                    <span className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </Container>

    {/* Bottom Bar */}
    <div className="border-t border-ink/10 bg-white/70 backdrop-blur">
      <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        
        <p className="text-sm text-ink/50">
          © 2026 GPT-5.5. All rights reserved.
        </p>

        <nav aria-label="Legal navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-ink/60">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="transition hover:text-ocean"
                  href={link.href}
                >
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
