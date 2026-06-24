import {
  FileText,
  Gauge,
  Link2,
  ScanSearch,
  ShieldCheck,
  SplitSquareVertical,
} from "lucide-react";

const signals = [
  {
    title: "Metadata",
    text: "Titles, descriptions, canonicals, and robots signals.",
    icon: FileText,
  },
  {
    title: "Structured Data",
    text: "Schema presence, schema types, and FAQ coverage.",
    icon: ScanSearch,
  },
  {
    title: "Content Quality",
    text: "Word count, heading hierarchy, and body-text depth.",
    icon: SplitSquareVertical,
  },
  {
    title: "Internal Connectivity",
    text: "Internal links that help crawlers discover priority pages.",
    icon: Link2,
  },
  {
    title: "Technical Compliance",
    text: "Image alt text and basic machine-readable hygiene.",
    icon: ShieldCheck,
  },
  {
    title: "Semantic Clarity",
    text: "How well headings align with the sections beneath them.",
    icon: Gauge,
  },
];

export function SignalsSection() {
  return (
    <section
      id="sample-report"
      className="bg-[linear-gradient(180deg,#F3F6F0_0%,#EEF4EC_100%)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-900/10">
            AUDIT SIGNALS
          </div>
          <h2 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            What Marrai checks.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            The free audit looks at the signals that help answer engines
            understand, retrieve, and cite your site.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {signals.map((signal) => {
            const Icon = signal.icon;

            return (
              <article
                key={signal.title}
                className="group rounded-3xl border border-slate-900/10 bg-white/80 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.035)] transition-transform duration-200 ease-out hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4C9A6A]/10 text-[#4C9A6A] ring-1 ring-[#4C9A6A]/12">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-medium text-slate-950">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {signal.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
