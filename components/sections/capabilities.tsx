import { Container } from "@/components/ui/container";

const audiences = [
  {
    title: "Developers",
    description:
      "Move through system design, implementation, testing, and review with a model that can hold the whole task in view."
  },
  {
    title: "Businesses",
    description:
      "Turn operational knowledge into repeatable workflows for support, finance, sales, and internal teams."
  },
  {
    title: "Researchers",
    description:
      "Explore literature, extract structure from dense material, and compare findings across sources."
  },
  {
    title: "Productivity users",
    description:
      "Draft, plan, summarize, and organize work without losing the nuance of your intent."
  }
];

export function Capabilities() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-copper">
              Use cases
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              One model, many kinds of momentum.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <article
                key={audience.title}
                className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft"
              >
                <h3 className="text-2xl font-semibold text-ink">
                  {audience.title}
                </h3>
                <p className="mt-4 leading-7 text-ink/62">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
