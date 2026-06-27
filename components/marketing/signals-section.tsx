import {
  FileText,
  Gauge,
  Link2,
  ScanSearch,
  ShieldCheck,
  SplitSquareVertical,
} from "lucide-react";

import { Reveal } from "./reveal";

const signals = [
  {
    title: "Metadata",
    text: "Titles, descriptions, canonicals, and robots signals.",
    example: "Title + description coverage",
    score: "92",
    icon: FileText,
  },
  {
    title: "Structured Data",
    text: "Schema presence, schema types, and FAQ coverage.",
    example: "Entity context",
    score: "78",
    icon: ScanSearch,
  },
  {
    title: "Content Quality",
    text: "Word count, heading hierarchy, and body-text depth.",
    example: "Answer-ready depth",
    score: "86",
    icon: SplitSquareVertical,
  },
  {
    title: "Internal Connectivity",
    text: "Internal links that help crawlers discover priority pages.",
    example: "Discoverable pages",
    score: "81",
    icon: Link2,
  },
  {
    title: "Technical Compliance",
    text: "Image alt text and basic machine-readable hygiene.",
    example: "Crawl hygiene",
    score: "89",
    icon: ShieldCheck,
  },
  {
    title: "Semantic Clarity",
    text: "How well headings align with the sections beneath them.",
    example: "Section coherence",
    score: "88",
    icon: Gauge,
  },
];

export function SignalsSection() {
  return (
    <section
      id="checks"
      className="bg-[linear-gradient(180deg,#F3F6F0_0%,#EEF4EC_100%)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <div className="inline-flex rounded-full bg-white/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 ring-1 ring-slate-900/10">
            Audit signals
          </div>
          <h2 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            What Marrai checks.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            The free audit looks at the signals that help answer engines
            understand, retrieve, and cite your site.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {signals.map((signal, index) => {
            const Icon = signal.icon;

            return (
              <Reveal
                key={signal.title}
                delayMs={(index % 3) * 80}
              >
                <article className="group h-full rounded-3xl border border-slate-900/10 bg-white/80 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.035)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#4C9A6A]/25 hover:shadow-[0_18px_44px_rgba(15,23,42,0.07)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4C9A6A]/10 text-[#4C9A6A] ring-1 ring-[#4C9A6A]/12 transition-colors group-hover:bg-[#4C9A6A]/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-medium text-white">
                      {signal.score}/100
                    </div>
                  </div>
                  <h3 className="mt-5 text-base font-medium text-slate-950">
                    {signal.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {signal.text}
                  </p>
                  <div className="mt-5 rounded-2xl border border-slate-900/8 bg-white/70 px-3 py-2 text-xs font-medium text-slate-600">
                    Example: {signal.example}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
