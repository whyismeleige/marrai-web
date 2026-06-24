import Link from "next/link";

import { AuditInputPill } from "./audit-input-pill";
import { MarraiNavbar } from "./marrai-navbar";

export function MarraiHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#CFEAF8]">
      <section className="relative flex min-h-[100svh] flex-col">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#CFEAF8_0%,#EEF5F1_48%,#E9F2E7_78%,#DCEED7_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.64),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(186,219,241,0.34),transparent_30%),radial-gradient(circle_at_50%_74%,rgba(124,174,102,0.14),transparent_34%),radial-gradient(circle_at_50%_104%,rgba(98,148,78,0.26),transparent_28%)]" />
        <div className="absolute left-[-10%] top-[12%] h-[42vh] w-[56vw] rounded-full bg-white/[0.38] blur-3xl" />
        <div className="absolute right-[-8%] top-[14%] h-[38vh] w-[44vw] rounded-full bg-sky-200/[0.24] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.025] mix-blend-multiply bg-[radial-gradient(rgba(16,24,40,0.65)_0.6px,transparent_0.8px)] [background-size:18px_18px]" />

        <MarraiNavbar />

        <div className="relative z-10 mx-auto flex flex-1 w-full max-w-5xl flex-col items-center justify-center px-5 pb-16 pt-8 text-center sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
          <div className="animate-fade-up mb-5 rounded-full bg-white/50 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-900/10 backdrop-blur-md">
            AI visibility audit
          </div>

          <h1 className="max-w-[920px] text-[48px] font-normal leading-[0.95] tracking-[-0.045em] text-slate-950 [text-wrap:balance] min-[400px]:text-[56px] sm:text-7xl lg:text-[92px] xl:text-[104px]">
            <span className="animate-fade-up block">Be understood.</span>
            <span className="animate-fade-up block [animation-delay:100ms]">
              Get cited.
            </span>
          </h1>

          <p className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-slate-600 [animation-delay:220ms] sm:text-lg lg:text-xl">
            Run a free AEO audit and see how AI answer engines understand your
            metadata, schema, content, links, and semantic clarity.
          </p>

          <AuditInputPill />

          <div className="animate-fade-up mt-5 flex flex-wrap items-center justify-center gap-3 [animation-delay:460ms]">
            <Link
              href="/audit"
              className="rounded-full bg-slate-950 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              Run free audit
            </Link>
            <Link
              href="/audit"
              className="rounded-full px-6 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 transition-colors hover:bg-white/60"
            >
              View sample report
            </Link>
          </div>

          <div className="animate-fade-up mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-slate-600 [animation-delay:560ms]">
            {[
              "Crawls up to 20 pages",
              "Metadata + schema checks",
              "Semantic clarity scoring",
              "Free audit report",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/[0.35] px-3 py-1 ring-1 ring-slate-900/[0.08] backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#4C9A6A]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
