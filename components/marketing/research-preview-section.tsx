import { Brain, FileText, Sparkles } from "lucide-react";

import { Reveal } from "./reveal";

const notes = [
  {
    tag: "AEO",
    title: "What is AEO?",
    description:
      "Answer-engine optimization is the work of making pages easy for AI systems to crawl, parse, understand, and cite.",
    icon: FileText,
  },
  {
    tag: "Citations",
    title: "How AI systems choose citations",
    description:
      "Clear entities, structured context, useful headings, and retrievable pages improve the odds that a source can be referenced.",
    icon: Brain,
  },
  {
    tag: "Schema",
    title: "Why schema still matters",
    description:
      "Structured data is not a shortcut, but it gives machines explicit context they can compare against visible page content.",
    icon: Sparkles,
  },
];

export function ResearchPreviewSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#EEF4EC_0%,#F7F6F1_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="max-w-2xl">
            <div className="inline-flex rounded-full bg-white/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 ring-1 ring-slate-900/10">
              Why it matters
            </div>
            <h2 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Built for the layer after SEO.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Ranking still matters, but answer engines add another layer:
              machine-readable context, citation readiness, and semantic
              consistency across the pages that represent your brand.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {notes.map((note, index) => {
              const Icon = note.icon;

              return (
                <Reveal key={note.title} delayMs={index * 90}>
                  <article className="group rounded-3xl border border-slate-900/10 bg-white/85 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.035)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#4C9A6A]/25 hover:shadow-[0_18px_44px_rgba(15,23,42,0.07)]">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-[11px] font-medium tracking-wide text-white">
                        {note.tag}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4C9A6A]/10 text-[#4C9A6A] ring-1 ring-[#4C9A6A]/12 transition-colors group-hover:bg-[#4C9A6A]/15">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-6 text-lg font-medium tracking-[-0.02em] text-slate-950">
                      {note.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {note.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delayMs={180}>
          <div className="mt-8 rounded-[1.5rem] border border-slate-900/10 bg-white/55 p-4 text-sm leading-6 text-slate-600 shadow-[0_10px_28px_rgba(15,23,42,0.03)] backdrop-blur-sm sm:p-5">
            Marrai keeps the first product surface practical: audit the signals
            a machine can inspect today, then turn the weak spots into concrete
            fixes.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
