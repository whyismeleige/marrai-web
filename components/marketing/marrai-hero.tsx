import Link from "next/link";

import { AuditInputPill } from "./audit-input-pill";
import { AuditReportMockup } from "./audit-report-mockup";
import { MarraiNavbar } from "./marrai-navbar";

export function MarraiHero() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#CFEAF8]">
      <section className="relative flex min-h-[100svh] flex-col">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#CFEAF8_0%,#EAF4EF_52%,#DBEFD7_100%)]" />
        <div className="absolute left-[-10%] top-[18%] h-[45vh] w-[55vw] rounded-full bg-white/45 blur-3xl" />
        <div className="absolute right-[-8%] top-[12%] h-[40vh] w-[45vw] rounded-full bg-sky-200/35 blur-3xl" />
        <div
          className="absolute inset-x-0 bottom-0 h-[18vh] blur-2xl md:h-[25vh]"
          style={{
            background:
              "linear-gradient(180deg, rgba(76,154,106,0) 0%, rgba(76,154,106,0.18) 40%, rgba(76,154,106,0.3) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[12vh] opacity-50 blur-3xl md:h-[16vh]"
          style={{
            background:
              "linear-gradient(180deg, rgba(219,239,215,0) 0%, rgba(214,233,208,0.85) 72%, rgba(164,199,152,0.78) 100%)",
          }}
        />

        <MarraiNavbar />

        <div className="flex-1 min-h-8 shrink-0 sm:min-h-12 lg:min-h-16" />

        <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
          <div className="animate-fade-up rounded-full bg-white/50 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-900/10 backdrop-blur-md">
            AI visibility audit
          </div>

          <h1 className="mt-5 max-w-[920px] text-[52px] font-normal leading-[0.95] tracking-[-0.045em] text-slate-950 [text-wrap:balance] min-[400px]:text-[60px] sm:text-7xl lg:text-8xl xl:text-[112px]">
            <span className="animate-fade-up block">Be understood.</span>
            <span className="animate-fade-up block [animation-delay:100ms]">
              Get cited.
            </span>
          </h1>

          <p className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-slate-600 [animation-delay:220ms] sm:mt-6 sm:text-lg lg:text-xl">
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
              href="#sample-report"
              className="rounded-full px-6 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 transition-colors hover:bg-white/60"
            >
              View sample report
            </Link>
          </div>
        </div>

        <div className="flex-1 min-h-10 shrink-0 sm:min-h-12 lg:min-h-16" />

        <div className="relative z-10 mx-auto w-[94%] max-w-5xl shrink-0 sm:w-[86%] lg:w-[74%] -mb-8 sm:-mb-16 lg:-mb-28">
          <AuditReportMockup />
        </div>
      </section>
    </main>
  );
}
