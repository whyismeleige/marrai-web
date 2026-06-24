import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#EEF4EC_0%,#E7EFE4_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(245,248,243,0.96)_100%)] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Run your first AI visibility audit.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Enter your website URL and get a free report showing how AI
              answer engines understand your site.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Start free audit
            </Link>
            <Link
              href="#sample-report"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 transition-colors hover:bg-slate-50"
            >
              View sample report
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
