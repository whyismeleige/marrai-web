import {
  ArrowRight,
  BarChart3,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Crawl",
    text: "Marrai crawls up to 20 pages from your website.",
    icon: Search,
  },
  {
    number: "02",
    title: "Parse",
    text: "It extracts metadata, headings, schema, links, and content structure.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Score",
    text: "It scores the signals that shape answer-engine visibility and clarity.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Recommend",
    text: "It returns practical findings and clear next steps.",
    icon: Sparkles,
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#F7F8F4_0%,#F3F6F0_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <h2 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            From website URL to AI visibility report.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Marrai turns a crawl into a practical report your team can use to
            improve visibility across answer engines.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="rounded-3xl border border-slate-900/10 bg-white/80 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.035)] transition-transform duration-200 ease-out hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-full bg-slate-950 px-2.5 py-1 text-[11px] font-medium tracking-[0.18em] text-white">
                    {step.number}
                  </div>
                  <Icon className="mt-0.5 h-5 w-5 text-[#4C9A6A]" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
                <div className="mt-5 h-px w-full bg-slate-900/8" />
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <ArrowRight className="h-3.5 w-3.5" />
                  Step {step.number}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
