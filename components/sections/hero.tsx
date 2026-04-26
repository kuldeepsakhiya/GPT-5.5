import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f7f6f2_0%,#ffffff_42%,#dfeae4_100%)]">
      <Container className="grid min-h-[92vh] items-center gap-10 py-14 sm:gap-12 sm:py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:gap-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex max-w-full rounded-full border border-ink/10 bg-white/65 px-4 py-2 text-sm font-medium leading-5 text-ink/70 sm:mb-6">
            New frontier model for teams and builders
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            Introducing GPT-5.5
          </h1>
          <p className="mt-6 max-w-2xl text-2xl leading-snug text-ink/78 sm:text-3xl sm:leading-tight lg:text-4xl">
            A new class of intelligence for real-world work
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/65 sm:mt-6 sm:text-lg sm:leading-8">
            GPT-5.5 helps teams move from intent to execution across coding,
            research, analysis, automation, and high-leverage productivity work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <ButtonLink href="#cta">Get Started</ButtonLink>
            <ButtonLink href="#features" variant="secondary">
              Explore capabilities
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] sm:max-w-xl md:max-w-none">
          <Image
            src="/product-visual.svg"
            alt="Abstract GPT-5.5 workspace interface showing reasoning, tools, and outputs"
            width={760}
            height={760}
            priority
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
