import { UseCaseIcon } from "@/components/icons/site-icons";
import { Container } from "@/components/ui/container";
import type { UseCaseIconName } from "@/components/icons/site-icons";

type UseCase = {
  icon: UseCaseIconName;
  title: string;
  desc: string;
  points: readonly string[];
};

const useCases: UseCase[] = [
  {
    icon: "developers",
    title: "For Developers",
    desc: "Write, debug, and optimize code faster with intelligent assistance across multiple languages and frameworks.",
    points: ["Code generation", "Debugging support", "API integration"],
  },
  {
    icon: "businesses",
    title: "For Businesses",
    desc: "Automate workflows, improve decision-making, and increase operational efficiency at scale.",
    points: ["Process automation", "Data insights", "Customer support"],
  },
  {
    icon: "researchers",
    title: "For Researchers",
    desc: "Analyze complex information, generate insights, and accelerate discovery with advanced reasoning.",
    points: ["Data analysis", "Summarization", "Knowledge extraction"],
  },
  {
    icon: "productivity",
    title: "For Productivity",
    desc: "Handle daily tasks, planning, and documentation with smarter assistance that saves time.",
    points: ["Task automation", "Content creation", "Workflow planning"],
  },
];

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="bg-paper py-18 sm:py-24 lg:py-32"
      aria-labelledby="use-cases-heading"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2
            id="use-cases-heading"
            className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Built for every kind of work
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base text-ink/60 sm:text-lg">
            From developers to businesses, GPT-5.5 adapts to your needs and helps you achieve more.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-7 md:grid-cols-2">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="group rounded-xl border border-ink/10 bg-white/70 p-6 sm:p-7 shadow-[0_18px_50px_rgba(17,17,17,0.05)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,17,17,0.1)] focus-within:ring-2 focus-within:ring-ocean/30"
            >
              {/* Icon */}
              <div
                aria-hidden="true"
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-ink/10 bg-paper text-ink"
              >
                <UseCaseIcon name={item.icon} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-ink/60">
                {item.desc}
              </p>

              {/* Points */}
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center text-sm text-ink/70"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-ink" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}