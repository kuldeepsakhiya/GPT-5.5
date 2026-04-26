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
    <section className="bg-ink py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="rounded-lg border border-white/12 bg-white/[0.06] p-7"
            >
              <p className="text-5xl font-semibold leading-none">{stat.value}</p>
              <p className="mt-5 max-w-xs leading-7 text-white/68">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
