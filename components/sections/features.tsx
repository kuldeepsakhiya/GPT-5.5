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
    <section id="features" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-ocean">
            Core strengths
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Built for the messy middle of real work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/62">
            GPT-5.5 is designed for tasks where context, judgment, and reliable
            execution matter as much as raw generation.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-ink/10 bg-paper/65 p-6 transition hover:border-ocean/30 hover:bg-white"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-white">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold text-ink">{feature.title}</h3>
              <p className="mt-3 leading-7 text-ink/62">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
