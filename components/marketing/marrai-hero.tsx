import Link from "next/link";

import { AuditInputPill } from "./audit-input-pill";
import { MarraiNavbar } from "./marrai-navbar";
import { ProductPreview } from "./product-preview";

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

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-5 pb-14 pt-8 text-center sm:px-8 sm:pb-20 sm:pt-10 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.82fr)] lg:px-10 lg:pb-20 lg:pt-8 lg:text-left xl:gap-14">
          <div className="mx-auto flex max-w-3xl flex-col items-center lg:mx-0 lg:items-start">
            <div className="animate-fade-up inline-flex rounded-full bg-white/45 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-700 ring-1 ring-slate-900/10 backdrop-blur-sm">
              Free AI visibility audit
            </div>

            <h1 className="mt-5 max-w-[920px] text-[48px] font-normal leading-[0.95] tracking-[-0.045em] text-slate-950 [text-wrap:balance] min-[400px]:text-[56px] sm:text-7xl lg:text-[86px] xl:text-[98px]">
              <span className="animate-fade-up block [animation-delay:80ms]">
                Be understood.
              </span>
              <span className="animate-fade-up block [animation-delay:160ms]">
                Get cited.
              </span>
            </h1>

            <p className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-slate-600 [animation-delay:260ms] sm:text-lg lg:text-xl">
              Run a free AEO audit and see whether your site is easy for answer
              engines to crawl, parse, understand, and reference.
            </p>

            <AuditInputPill
              id="hero-website-url"
              className="lg:mx-0 [animation-delay:360ms]"
            />

            <div className="animate-fade-up mt-4 flex flex-wrap items-center justify-center gap-3 [animation-delay:480ms] lg:justify-start">
              <Link
                href="/audit"
                className="rounded-full bg-slate-950 px-6 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                Run free audit
              </Link>
            </div>

            <div className="animate-fade-up mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-slate-600 [animation-delay:580ms] lg:justify-start">
              {[
                "Crawls up to 20 pages",
                "Metadata + schema checks",
                "Semantic clarity scoring",
                "Practical fixes",
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

          <div className="w-full lg:justify-self-end">
            <ProductPreview />
          </div>
        </div>
      </section>
    </section>
  );
}
