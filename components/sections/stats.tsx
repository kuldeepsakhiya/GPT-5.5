const stats = [
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
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Built for performance at scale
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            GPT-5.5 delivers measurable improvements in speed, accuracy, and reliability.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Big Number */}
              <div className="text-4xl md:text-5xl font-bold text-gray-900">
                {stat.value}
              </div>

              {/* Label */}
              <div className="mt-2 text-lg font-semibold text-gray-800">
                {stat.label}
              </div>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 max-w-xs mx-auto">
                {stat.desc}
              </p>

              {/* Underline hover effect */}
              <div className="mt-4 h-1 w-10 mx-auto bg-gray-300 group-hover:w-20 group-hover:bg-black transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
