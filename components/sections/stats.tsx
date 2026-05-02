import { Container } from "@/components/ui/container";

type Stat = {
  value: string;
  label: string;
  desc: string;
};

const stats: Stat[] = [
  {
    value: "95%",
    label: "Accuracy",
    desc: "High precision across coding, reasoning, and real-world tasks",
  },
  {
    value: "2x",
    label: "Faster Workflows",
    desc: "Accelerate development and research with intelligent automation",
  },
  {
    value: "10k+",
    label: "Tasks Completed",
    desc: "Successfully handling complex multi-step processes daily",
  },
  {
    value: "99.9%",
    label: "Reliability",
    desc: "Consistent performance across diverse use cases",
  },
];

export function Stats() {
  return (
    <section
      className="bg-paper py-18 sm:py-24 lg:py-32"
      aria-labelledby="stats-heading"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2
            id="stats-heading"
            className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Built for performance at scale
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base text-ink/60 sm:text-lg">
            GPT-5.5 delivers measurable improvements in speed, accuracy, and reliability.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center"
            >
              {/* Value */}
              <div className="text-4xl font-semibold text-ink sm:text-5xl">
                {stat.value}
              </div>

              {/* Label */}
              <div className="mt-2 text-lg font-medium text-ink">
                {stat.label}
              </div>

              {/* Description */}
              <p className="mt-2 text-sm text-ink/60 max-w-xs mx-auto">
                {stat.desc}
              </p>

              {/* Accent line */}
              <div className="mt-4 h-[2px] w-10 mx-auto bg-ink/20 transition-all duration-300 group-hover:w-20 group-hover:bg-ocean" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}