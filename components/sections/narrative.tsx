import { Container } from "@/components/ui/container";

export function Narrative() {
  return (
    <section id="reasoning" className="scroll-mt-28 bg-[linear-gradient(180deg,#ffffff_0%,#f7f6f2_100%)] py-18 sm:py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase leading-5 text-moss">
            Better execution
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.06] text-ink sm:text-5xl lg:text-6xl">
            Reasoning that stays useful after the first answer.
          </h2>
        </div>

        <div className="border-l border-ink/12 pl-6 text-base leading-7 text-ink/66 sm:pl-8 sm:text-lg sm:leading-8">
          <p>
            GPT-5.5 improves on previous generations by treating complex work as
            a sequence of decisions, checks, and refinements. It can form a plan,
            inspect constraints, adapt as new information appears, and keep
            moving toward a finished outcome.
          </p>
          <p className="mt-7">
            That makes it especially effective for real-world tasks: writing and
            reviewing code, comparing research, coordinating tools, drafting
            business artifacts, and helping teams turn ambiguous requests into
            polished deliverables.
          </p>
        </div>
      </Container>
    </section>
  );
}
