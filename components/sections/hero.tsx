import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f6f2_0%,#ffffff_46%,#e4ece5_100%)]">
      <div className="animated-gradient absolute -inset-24 -z-20 bg-[radial-gradient(circle_at_18%_24%,rgba(176,93,53,0.16),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(29,111,134,0.22),transparent_32%),radial-gradient(circle_at_62%_76%,rgba(111,125,88,0.18),transparent_30%)] blur-2xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(247,246,242,0.72)_0%,rgba(255,255,255,0.78)_48%,rgba(247,246,242,0.88)_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
      <Container className="grid min-h-[92vh] items-center gap-12 py-16 sm:gap-14 sm:py-18 md:grid-cols-[1.02fr_0.98fr] md:py-22 lg:gap-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex max-w-full rounded-full border border-ink/10 bg-white/75 px-4 py-2 text-sm font-medium leading-5 text-ink/70 shadow-[0_10px_35px_rgba(17,17,17,0.06)] backdrop-blur sm:mb-7">
            New frontier model for teams and builders
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            Introducing GPT-5.5
          </h1>
          <p className="mt-7 max-w-2xl text-2xl font-medium leading-snug text-ink/82 sm:text-3xl sm:leading-tight lg:text-4xl">
            A new class of intelligence for real-world work
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/62 sm:mt-6 sm:text-lg sm:leading-8">
            GPT-5.5 helps teams move from intent to execution across coding,
            research, analysis, automation, and high-leverage productivity work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <ButtonLink
              href="#cta"
              className="shadow-[0_18px_45px_rgba(17,17,17,0.16)]"
            >
              Get Started
            </ButtonLink>
            <ButtonLink href="#features" variant="secondary">
              Explore capabilities
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] sm:max-w-xl md:max-w-none">
          <div className="absolute inset-8 -z-10 rounded-lg bg-ocean/14 blur-3xl" />
          <div className="absolute -left-5 top-10 hidden h-24 w-24 rounded-lg border border-white/80 bg-white/45 shadow-soft backdrop-blur sm:block" />
          <div className="absolute -bottom-4 right-4 hidden h-28 w-44 rounded-lg border border-ink/10 bg-white/60 shadow-soft backdrop-blur sm:block" />
          <div className="rounded-lg border border-white/80 bg-white/35 p-2 shadow-[0_35px_90px_rgba(17,17,17,0.14)] backdrop-blur-md">
            <Image
              src="/product-visual.svg"
              alt="Abstract GPT-5.5 workspace interface showing reasoning, tools, and outputs"
              width={760}
              height={760}
              priority
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
