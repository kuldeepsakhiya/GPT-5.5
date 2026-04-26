import { Container } from "@/components/ui/container";

const stats = [
  {
    value: "94%",
    label: "Instruction accuracy on complex work simulations"
  },
  {
    value: "2.8x",
    label: "Faster iteration across coding and research tasks"
  },
  {
    value: "+41%",
    label: "Higher completion rate on multi-step workflows"
  }
];

export function Stats() {
  return (
    <section id="benchmarks" className="scroll-mt-28 bg-ink py-14 text-white sm:py-18 lg:py-20">
      <Container>
        <h2 className="sr-only">GPT-5.5 benchmark results</h2>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="rounded-lg border border-white/12 bg-white/[0.06] p-6 sm:p-7 lg:p-8"
            >
              <p className="text-4xl font-semibold leading-none sm:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/68 sm:mt-5 sm:text-base sm:leading-7">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
