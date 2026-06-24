import Link from "next/link";
import { ArrowRight, Brain, FileText, Sparkles } from "lucide-react";

const articles = [
  {
    tag: "Guide",
    title: "What is AEO?",
    description:
      "A practical introduction to answer engine optimization and why it matters for modern discovery.",
    icon: FileText,
  },
  {
    tag: "AI Search",
    title: "How AI systems choose citations",
    description:
      "The signals that make a page easier for answer engines to parse, retrieve, and reference.",
    icon: Brain,
  },
  {
    tag: "Structured Data",
    title: "Why schema still matters",
    description:
      "How structured data helps machines understand context, entities, and answer-ready content.",
    icon: Sparkles,
  },
];

export function ResearchPreviewSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#EEF4EC_0%,#F7F6F1_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-900/10">
              RESEARCH
            </div>
            <h2 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Learn how AI answer engines understand, select, and cite brands.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Marrai’s research library will cover AEO, AI search, citation
              intelligence, structured data, and content strategy for the
              answer-engine era.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 transition-colors hover:bg-white/70"
          >
            View all research
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {articles.map((article) => {
            const Icon = article.icon;

            return (
              <article
                key={article.title}
                className="rounded-3xl border border-slate-900/10 bg-white/85 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.035)] transition-transform duration-200 ease-out hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-[11px] font-medium tracking-wide text-white">
                    {article.tag}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4C9A6A]/10 text-[#4C9A6A] ring-1 ring-[#4C9A6A]/12">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-medium tracking-[-0.02em] text-slate-950">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {article.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
