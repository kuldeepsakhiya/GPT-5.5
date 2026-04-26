import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Cta() {
  return (
    <section id="cta" className="scroll-mt-28 bg-paper py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="rounded-lg bg-[linear-gradient(135deg,#111111_0%,#1d6f86_58%,#6f7d58_100%)] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Start building with GPT-5.5
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Bring stronger reasoning, planning, and tool use into the products
              and workflows your team already relies on.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
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
