import Link from "next/link";
import { MarraiLogo } from "./marrai-logo";

export function MarraiNavbar() {
  return (
    <header className="relative z-20 animate-fade-down px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
      <nav className="mx-auto flex w-full items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-[#101828]">
          <MarraiLogo className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="text-[13px] font-medium tracking-[-0.01em]">
            Marrai
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/blog"
            className="rounded-full px-3 py-2 text-[13px] font-medium text-slate-700 transition-colors hover:bg-white/45 hover:text-slate-950 sm:px-4"
          >
            Research
          </Link>
          <Link
            href="/audit"
            className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-slate-800 sm:px-5"
          >
            Start free
          </Link>
        </div>
      </nav>
    </header>
  );
}
