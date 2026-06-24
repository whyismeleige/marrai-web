import Link from "next/link";

export function ReportCta() {
  return (
    <section className="rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(243,246,240,0.98)_100%)] p-6 shadow-[0_18px_48px_rgba(15,23,42,0.04)] sm:p-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl">
          Want a deeper AI visibility strategy?
        </h2>
        <div className="mt-6">
          <Link
            href="/audit"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 hover:shadow-lg"
          >
            Join Marrai waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
