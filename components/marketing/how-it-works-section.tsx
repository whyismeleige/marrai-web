import {
  ArrowRight,
  BarChart3,
  Link2,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Reveal } from "./reveal";

const steps = [
  {
    number: "URL",
    title: "Enter URL",
    text: "Start with the domain or page you want answer engines to understand.",
    icon: Link2,
  },
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
        <Reveal className="max-w-2xl">
          <div className="inline-flex rounded-full bg-white/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 ring-1 ring-slate-900/10">
            Product flow
          </div>
          <h2 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            From website URL to AI visibility report.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From URL to crawl. From crawl to score. From score to practical
            fixes your team can act on.
          </p>
        </Reveal>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-12 right-12 top-[3.25rem] hidden h-px overflow-hidden rounded-full bg-slate-900/10 lg:block">
            <div className="animate-pipeline-scan h-full w-1/4 rounded-full bg-[linear-gradient(90deg,transparent,rgba(76,154,106,0.88),transparent)]" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={`${step.number}-${step.title}`}
                  delayMs={index * 80}
                >
                  <article className="relative z-10 h-full rounded-3xl border border-slate-900/10 bg-white/80 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.035)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#4C9A6A]/25 hover:shadow-[0_18px_44px_rgba(15,23,42,0.07)]">
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
                      {index === 0 ? "Input" : `Step ${step.number}`}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delayMs={180}>
          <div className="mt-8 rounded-[1.5rem] border border-slate-900/10 bg-white/60 p-4 text-sm leading-6 text-slate-600 shadow-[0_10px_28px_rgba(15,23,42,0.03)] backdrop-blur-sm sm:p-5">
            Marrai checks whether your site is easy for answer engines to
            discover, interpret, and cite without making your team decode a
            generic SEO export.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
