import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Cta() {
  return (
    <section id="cta" className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="rounded-lg bg-[linear-gradient(135deg,#111111_0%,#1d6f86_58%,#6f7d58_100%)] px-6 py-14 text-white sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Start building with GPT-5.5
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Bring stronger reasoning, planning, and tool use into the products
              and workflows your team already relies on.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#" className="bg-white text-ink hover:bg-paper">
              Get Started
            </ButtonLink>
            <ButtonLink
              href="#features"
              variant="secondary"
              className="border-white/25 bg-white/10 text-white hover:border-white/60 hover:text-white"
            >
              Learn more
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
