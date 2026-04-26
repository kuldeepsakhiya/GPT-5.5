import { UseCaseIcon } from "@/components/icons/site-icons";
import { Container } from "@/components/ui/container";

const audiences = [
  {
    icon: "developers",
    title: "Developers",
    description:
      "Move through system design, implementation, testing, and review with a model that can hold the whole task in view."
  },
  {
    icon: "businesses",
    title: "Businesses",
    description:
      "Turn operational knowledge into repeatable workflows for support, finance, sales, and internal teams."
  },
  {
    icon: "researchers",
    title: "Researchers",
    description:
      "Explore literature, extract structure from dense material, and compare findings across sources."
  },
  {
    icon: "productivity",
    title: "Productivity users",
    description:
      "Draft, plan, summarize, and organize work without losing the nuance of your intent."
  }
] as const;

export function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-28 border-y border-ink/10 bg-[linear-gradient(180deg,#f7f6f2_0%,#ece8dd_100%)] py-18 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-semibold uppercase leading-5 text-copper">
              Use cases
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.06] text-ink sm:text-5xl lg:text-6xl">
              One model, many kinds of momentum.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {audiences.map((audience) => (
              <article
                key={audience.title}
                className="group rounded-lg border border-ink/10 bg-white/78 p-6 shadow-[0_20px_60px_rgba(17,17,17,0.07)] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:border-copper/25 hover:bg-white hover:shadow-[0_26px_74px_rgba(17,17,17,0.12)] sm:p-7"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="h-px w-12 bg-copper/40 transition group-hover:w-20" />
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ink/10 bg-paper text-copper">
                    <UseCaseIcon name={audience.icon} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold leading-snug text-ink sm:text-2xl">
                  {audience.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-ink/62 sm:mt-4">
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
