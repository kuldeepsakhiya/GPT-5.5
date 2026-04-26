import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Cta() {
  return (
    <section id="cta" className="scroll-mt-28 bg-paper py-18 sm:py-24 lg:py-32">
      <Container>
        <div className="relative isolate overflow-hidden rounded-lg bg-[linear-gradient(135deg,#111111_0%,#17434a_55%,#6f7d58_100%)] px-6 py-12 text-white shadow-[0_28px_90px_rgba(17,17,17,0.18)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute inset-x-8 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl">
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
