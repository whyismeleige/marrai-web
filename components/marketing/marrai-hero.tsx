import { AuditInputPill } from "./audit-input-pill";
import { MarraiNavbar } from "./marrai-navbar";
import { ProductPreview } from "./product-preview";

export function MarraiHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#CFEAF8]">
      <section className="relative flex min-h-[100svh] flex-col">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#CFEAF8_0%,#EEF5F1_48%,#E9F2E7_78%,#DCEED7_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.64),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(186,219,241,0.34),transparent_30%),radial-gradient(circle_at_50%_74%,rgba(124,174,102,0.14),transparent_34%),radial-gradient(circle_at_50%_104%,rgba(98,148,78,0.26),transparent_28%)]" />
        <div className="absolute top-[12%] left-[-10%] h-[42vh] w-[56vw] rounded-full bg-white/[0.38] blur-3xl" />
        <div className="absolute top-[14%] right-[-8%] h-[38vh] w-[44vw] rounded-full bg-sky-200/[0.24] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(16,24,40,0.65)_0.6px,transparent_0.8px)] [background-size:18px_18px] opacity-[0.025] mix-blend-multiply" />

        <MarraiNavbar />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-5 pt-8 pb-14 text-center sm:px-8 sm:pt-10 sm:pb-20 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.82fr)] lg:px-10 lg:pt-8 lg:pb-20 lg:text-left xl:gap-14">
          <div className="mx-auto flex max-w-3xl flex-col items-center lg:mx-0 lg:items-start">
            <h1 className="mt-5 max-w-[920px] text-[48px] leading-[0.95] font-normal tracking-[-0.045em] [text-wrap:balance] text-slate-950 min-[400px]:text-[56px] sm:text-7xl lg:text-[86px] xl:text-[98px]">
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
              className="[animation-delay:360ms] lg:mx-0"
            />
          </div>

          <div className="w-full lg:justify-self-end">
            <ProductPreview />
          </div>
        </div>
      </section>
    </section>
  );
}
