import { Container } from "@/components/ui/container";

export function Narrative() {
  return (
    <section id="reasoning" className="scroll-mt-28 bg-white py-16 sm:py-24 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase leading-5 text-moss">
            Better execution
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Reasoning that stays useful after the first answer.
          </h2>
        </div>

        <div className="space-y-6 text-base leading-7 text-ink/66 sm:space-y-7 sm:text-lg sm:leading-8">
          <p>
            GPT-5.5 improves on previous generations by treating complex work as
            a sequence of decisions, checks, and refinements. It can form a plan,
            inspect constraints, adapt as new information appears, and keep
            moving toward a finished outcome.
          </p>
          <p>
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
