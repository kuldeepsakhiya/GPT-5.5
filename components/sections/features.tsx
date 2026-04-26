import { FeatureIcon } from "@/components/icons/feature-icon";
import { Container } from "@/components/ui/container";

const features = [
  {
    icon: "code",
    title: "Coding & Engineering",
    description:
      "Design, refactor, debug, and ship production code with deeper repository awareness."
  },
  {
    icon: "research",
    title: "Research & Analysis",
    description:
      "Synthesize complex sources, compare evidence, and turn raw information into decisions."
  },
  {
    icon: "workflow",
    title: "Automation & Workflows",
    description:
      "Coordinate multi-step work across files, tools, data, and business processes."
  },
  {
    icon: "speed",
    title: "Efficiency & Speed",
    description:
      "Complete everyday knowledge work with less repetition and faster iteration cycles."
  },
  {
    icon: "reasoning",
    title: "Multi-step Reasoning",
    description:
      "Plan, revise, and execute longer tasks with stronger continuity from start to finish."
  },
  {
    icon: "tools",
    title: "Tool Usage Capability",
    description:
      "Use connected tools to inspect context, produce artifacts, and validate outputs."
  }
] as const;

export function Features() {
  return (
    <section id="features" className="scroll-mt-28 bg-white py-18 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase leading-5 text-ocean">
              Core strengths
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Built for the messy middle of real work.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-ink/58 sm:text-lg sm:leading-8 lg:justify-self-end">
            GPT-5.5 is designed for tasks where context, judgment, and reliable
            execution matter as much as raw generation.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`rounded-lg border p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-ocean/30 sm:p-7 ${
                index === 0
                  ? "border-ink/10 bg-ink text-white shadow-[0_24px_70px_rgba(17,17,17,0.16)] hover:shadow-[0_30px_80px_rgba(17,17,17,0.2)] sm:col-span-2 lg:col-span-1"
                  : "border-ink/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f6f2_100%)] shadow-[0_18px_50px_rgba(17,17,17,0.05)] hover:shadow-[0_24px_70px_rgba(17,17,17,0.1)]"
              }`}
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg sm:mb-6 ${
                  index === 0 ? "bg-white text-ink" : "bg-ink text-white"
                }`}
              >
                <FeatureIcon name={feature.icon} />
              </div>
              <h3
                className={`text-xl font-semibold leading-snug ${
                  index === 0 ? "text-white" : "text-ink"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`mt-3 text-base leading-7 ${
                  index === 0 ? "text-white/68" : "text-ink/60"
                }`}
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
