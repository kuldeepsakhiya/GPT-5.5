import { Container } from "@/components/ui/container";

export function Narrative() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-moss">
            Better execution
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Reasoning that stays useful after the first answer.
          </h2>
        </div>

        <div className="space-y-7 text-lg leading-8 text-ink/66">
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
