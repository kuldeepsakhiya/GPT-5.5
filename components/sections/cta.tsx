import { ArrowRightIcon } from "@/components/icons/site-icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Cta() {
  return (
    <section
      id="cta"
      className="scroll-mt-28 bg-paper py-18 sm:py-24 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="relative isolate overflow-hidden rounded-lg bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_50%,#334155_100%)] px-6 py-12 text-white shadow-[0_28px_90px_rgba(0,0,0,0.25)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          {/* top line */}
          <div className="absolute inset-x-8 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* glow */}
          <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-ocean/20 blur-3xl" />

          <div className="max-w-3xl">
            <h2
              id="cta-heading"
              className="text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl"
            >
              Build faster. Ship smarter.
            </h2>

            <p className="mt-3 text-xl text-white/90">
              Powered by GPT-5.5
            </p>

            <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Bring stronger reasoning, automation, and real-world intelligence into
              your workflows — without complexity.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row"
            role="group"
            aria-label="Call to action">
            <ButtonLink href="#" variant="light">
              <span>Get Started</span>
              <ArrowRightIcon />
            </ButtonLink>

            <ButtonLink href="#features" variant="darkSecondary">
              Explore Features
            </ButtonLink>
          </div>

          <p className="mt-6 text-sm text-white/50">
            No setup required • Start instantly
          </p>
        </div>
      </Container>
    </section>
  );
}