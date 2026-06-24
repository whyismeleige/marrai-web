import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
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

        <div className="hidden items-center gap-8 md:flex">
          {[
            ["Audit", "/audit"],
            ["Research", "#sample-report"],
            ["Report", "#sample-report"],
          ].map(([item, href]) => (
            <Link
              key={item}
              href={href}
              className="text-[13px] text-slate-700 transition-colors hover:text-slate-950"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link
          href="/audit"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2",
            "text-[13px] font-medium text-white transition-colors hover:bg-slate-800",
            "sm:px-5",
          )}
        >
          <span>Start free</span>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.2} />
        </Link>
      </nav>
    </header>
  );
}
