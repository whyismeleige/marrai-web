import type { Metadata } from "next";

import { hasSanityConfig } from "@/sanity/config/env";

import { Studio } from "./studio";

export const metadata: Metadata = {
  title: "Marrai Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudioPage() {
  if (!hasSanityConfig()) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-[linear-gradient(180deg,#CFEAF8_0%,#EEF5F1_100%)] px-6 text-[#101828]">
        <section className="w-full max-w-xl rounded-[2rem] border border-slate-900/10 bg-white/75 p-8 text-center shadow-[0_18px_54px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
            Marrai Studio
          </p>
          <h1 className="mt-4 text-3xl font-normal tracking-[-0.04em] text-slate-950">
            Sanity is not configured yet.
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Add the Sanity project environment variables to open the embedded
            Studio in this environment.
          </p>
        </section>
      </main>
    );
  }

  return <Studio />;
}
