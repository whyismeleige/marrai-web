import { ArrowRight, FileText, Link2, Search } from "lucide-react";

const cards = [
  {
    title: "AI systems choose what gets cited",
    text: "Your pages need to be clear, structured, and retrievable.",
    icon: Search,
  },
  {
    title: "Machine readability is now a growth signal",
    text: "Metadata, schema, headings, and internal links shape how AI systems understand your site.",
    icon: Link2,
  },
  {
    title: "Generic SEO reports miss the AI layer",
    text: "Marrai audits deterministic signals and semantic clarity together.",
    icon: FileText,
  },
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#EEF5F1_0%,#F7F8F4_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <div className="max-w-xl">
            <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-900/10">
              THE SHIFT
            </div>
            <h2 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Search is becoming answer-driven.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Ranking is no longer the only surface that matters. AI answer
              engines summarize, compare, and cite brands before a user ever
              clicks.
            </p>
          </div>

          <div className="grid gap-4">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-3xl border border-slate-900/10 bg-white/75 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#4C9A6A]/10 text-[#4C9A6A] ring-1 ring-[#4C9A6A]/12">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-slate-950">
                        {card.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 ring-1 ring-slate-900/10">
            <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
            Visibility now depends on retrievability
          </span>
        </div>
      </div>
    </section>
  );
}
