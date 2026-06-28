"use client";

import Link from "next/link";

export default function BlogError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-[100svh] bg-[linear-gradient(180deg,#CFEAF8_0%,#EEF5F1_42%,#E7EFE4_100%)] text-[#101828]">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-3xl items-center px-5 py-10 sm:px-8">
        <div className="rounded-[2rem] border border-slate-900/10 bg-white/76 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-8">
          <h1 className="text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Research could not load.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The blog content source is unavailable right now. Try again, or
            return to the landing page.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reset}
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Try again
            </button>
            <Link
              href="/"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 transition-colors hover:bg-white/70"
            >
              Back home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
