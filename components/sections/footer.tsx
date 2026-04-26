import { Container } from "@/components/ui/container";

const links = ["About", "Privacy", "Contact"];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white py-8">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/58">
          © 2026 GPT-5.5. All rights reserved.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-5 text-sm font-medium text-ink/64">
            {links.map((link) => (
              <li key={link}>
                <a className="transition hover:text-ocean" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
