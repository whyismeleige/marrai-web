import { AuditInputPill } from "./audit-input-pill";
import { Reveal } from "./reveal";

export function FinalCtaSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#F7F6F1_0%,#E7EFE4_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(245,248,243,0.98)_100%)] px-6 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.07)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="absolute left-[-8%] top-[-20%] h-56 w-56 rounded-full bg-[#4C9A6A]/10 blur-3xl" />
            <div className="absolute bottom-[-26%] right-[-10%] h-64 w-64 rounded-full bg-sky-200/35 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-12">
              <div className="max-w-2xl">
                <h2 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
                  Run your first AI visibility audit.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                  Enter your website URL. Marrai will crawl up to 20 pages and
                  return a practical report.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-slate-900/10 bg-white/65 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-5">
                <AuditInputPill
                  id="final-website-url"
                  className="mt-0 max-w-none sm:mt-0"
                  placeholder="https://yourdomain.com"
                  buttonLabel="Run audit"
                  helperText="No account required to start. Add an email on the next step to receive the report link."
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
