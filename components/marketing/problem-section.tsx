import { FileText, Link2, Search } from "lucide-react";

import { Reveal } from "./reveal";

const cards = [
  {
    label: "Selection",
    title: "AI systems choose before users click",
    text: "Your pages are selected, summarized, and cited inside answer interfaces before a visitor reaches your site.",
    icon: Search,
  },
  {
    label: "Readability",
    title: "Machine clarity is now distribution",
    text: "Metadata, schema, headings, and links shape whether answer engines can understand what each page is for.",
    icon: Link2,
  },
  {
    label: "Action",
    title: "SEO checks are not enough",
    text: "Marrai connects crawl signals with semantic clarity so you can see what is machine-readable, unclear, and fixable.",
    icon: FileText,
  },
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#EEF5F1_0%,#F7F8F4_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <Reveal className="max-w-xl">
            <div className="inline-flex rounded-full bg-white/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 ring-1 ring-slate-900/10">
              The shift
            </div>
            <h2 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Search is becoming answer-driven.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              AI systems do not just find pages. They choose what gets cited.
              Discovery now happens through summaries, comparisons, and answers
              before a user ever clicks.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <Reveal
                  key={card.title}
                  delayMs={index * 90}
                >
                  <article className="group rounded-3xl border border-slate-900/10 bg-white/75 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#4C9A6A]/25 hover:shadow-[0_18px_46px_rgba(15,23,42,0.08)]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#4C9A6A]/10 text-[#4C9A6A] ring-1 ring-[#4C9A6A]/12 transition-colors group-hover:bg-[#4C9A6A]/15">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                          {card.label}
                        </span>
                        <h3 className="mt-2 text-base font-medium text-slate-950">
                          {card.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
