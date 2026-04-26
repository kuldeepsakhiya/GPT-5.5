import { UseCaseIcon } from "@/components/icons/site-icons";

const useCases = [
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
] as const;

export function UseCases() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Built for every kind of work
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From developers to businesses, GPT-5.5 adapts to your needs and helps you achieve more.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-900">
                <UseCaseIcon name={item.icon} />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>

              {/* Bullet Points */}
              <ul className="mt-4 space-y-2">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span className="w-2 h-2 bg-black rounded-full mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
