import Link from "next/link";

import { MarraiLogo } from "./marrai-logo";
import { Reveal } from "./reveal";

export function SiteFooter() {
  return (
    <footer className="bg-[linear-gradient(180deg,#E7EFE4_0%,#E3EBDD_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Reveal className="rounded-[2rem] border border-slate-900/10 bg-white/70 px-6 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:px-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <Link href="/" className="flex items-center gap-2 text-[#101828]">
                <MarraiLogo className="h-5 w-5" />
                <span className="text-[13px] font-medium tracking-[-0.01em]">
                  Marrai
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
                AI visibility audits for answer-engine discovery.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="text-[11px] font-medium tracking-[0.18em] text-slate-500">
                  PRODUCT
                </div>
                <div className="mt-4 grid gap-3 text-sm text-slate-700">
                  <Link className="transition-colors hover:text-slate-950" href="/audit">
                    Free audit
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-medium tracking-[0.18em] text-slate-500">
                  COMPANY
                </div>
                <div className="mt-4 grid gap-3 text-sm text-slate-700">
                  <Link className="transition-colors hover:text-slate-950" href="/">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 border-t border-slate-900/8 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Marrai. All rights reserved.</span>
            <span>Built for the layer after SEO.</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
