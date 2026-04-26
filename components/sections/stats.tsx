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
    <section id="benchmarks" className="scroll-mt-28 bg-[linear-gradient(135deg,#111111_0%,#172222_52%,#1d6f86_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <h2 className="sr-only">GPT-5.5 benchmark results</h2>
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-sm font-semibold uppercase leading-5 text-white/56">
            Measured progress
          </p>
          <p className="mt-3 text-2xl font-medium leading-tight text-white sm:text-3xl">
            Better results where long context, judgment, and execution meet.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="rounded-lg border border-white/12 bg-white/[0.07] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.09] hover:shadow-[0_24px_70px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] sm:p-7 lg:p-8"
            >
              <p className="text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/66 sm:text-base sm:leading-7">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
