import type { ReactNode } from "react";
import Link from "next/link";

import { MarraiLogo } from "@/components/marketing/marrai-logo";

type AuditPageShellProps = {
  children: ReactNode;
};

export function AuditPageShell({ children }: AuditPageShellProps) {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#CFEAF8]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#CFEAF8_0%,#EEF5F1_46%,#EAF2E6_80%,#DBEFD7_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.64),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(186,219,241,0.34),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(98,148,78,0.24),transparent_28%)]" />
      <div className="absolute left-[-10%] top-[12%] h-[42vh] w-[56vw] rounded-full bg-white/[0.38] blur-3xl" />
      <div className="absolute right-[-8%] top-[14%] h-[38vh] w-[44vw] rounded-full bg-sky-200/[0.24] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.025] mix-blend-multiply bg-[radial-gradient(rgba(16,24,40,0.65)_0.6px,transparent_0.8px)] [background-size:18px_18px]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6">
        <Link href="/" className="flex items-center gap-2 text-[#101828]">
          <MarraiLogo className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="text-[13px] font-medium tracking-[-0.01em]">
            Marrai
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-center py-10 sm:py-12 lg:py-14">
          {children}
        </div>
      </div>
    </main>
  );
}
