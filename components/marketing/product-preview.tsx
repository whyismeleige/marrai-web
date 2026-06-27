import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Link2,
  ScanSearch,
} from "lucide-react";

import { cn } from "@/lib/utils";

const metrics = [
  { label: "Metadata", value: "92", width: "w-[92%]" },
  { label: "Schema", value: "78", width: "w-[78%]" },
  { label: "Semantic clarity", value: "88", width: "w-[88%]" },
  { label: "Internal links", value: "81", width: "w-[81%]" },
];

const pipeline = [
  { label: "Crawl", icon: ScanSearch },
  { label: "Parse", icon: FileText },
  { label: "Score", icon: BarChart3 },
  { label: "Recommend", icon: Link2 },
];

export function ProductPreview() {
  return (
    <div className="animate-hero-rise relative mx-auto w-full max-w-[520px] [animation-delay:420ms]">
      <div className="animate-soft-float relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(244,248,243,0.98)_100%)] p-5 text-left shadow-[0_28px_90px_rgba(15,23,42,0.12)] sm:p-6">
        <div className="absolute left-6 top-6 h-28 w-28 rounded-full bg-[#4C9A6A]/10 blur-3xl" />
        <div className="absolute right-[-18px] top-[-22px] h-32 w-32 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative">
          <div>
            <h2 className="mt-4 text-2xl font-normal tracking-[-0.04em] text-slate-950">
              See what machines can understand.
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
              Scores map to the crawl, metadata, schema, links, and semantic
              clarity signals Marrai can inspect.
            </p>
          </div>
        </div>

        <div className="relative mt-6 rounded-[1.5rem] border border-slate-900/10 bg-white/75 p-4 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-[0.72fr_1fr]">
            <div className="rounded-[1.25rem] border border-[#4C9A6A]/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(239,248,241,0.96)_100%)] p-4 text-slate-950 shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    Overall
                  </p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-5xl font-normal tracking-[-0.05em]">
                      84
                    </span>
                    <span className="pb-1 text-sm text-slate-500">/ 100</span>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4C9A6A]/10 text-[#4C9A6A] ring-1 ring-[#4C9A6A]/15">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-600">
                Strong foundation. Schema context and link depth can improve.
              </p>
            </div>

            <div className="grid gap-2">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-900/8 bg-white/90 px-3 py-2.5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-slate-900">
                      {metric.label}
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {metric.value}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-900/8">
                    <div
                      className={cn(
                        "h-full rounded-full bg-[linear-gradient(90deg,#B7DDC0,#4C9A6A)]",
                        metric.width,
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-[#4C9A6A]/15 bg-[#4C9A6A]/8 px-4 py-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-medium text-slate-950">
                  Next practical fix
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Add structured data that clarifies entity context on priority
                  pages.
                </p>
              </div>
              <div className="shrink-0 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[#326548] ring-1 ring-[#4C9A6A]/15">
                High impact
              </div>
            </div>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-2xl border border-slate-900/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,246,240,0.92)_100%)] px-4 py-3">
            <div className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <span>Crawl / Parse / Score / Recommend</span>
              <span className="text-[#4C9A6A]">In progress</span>
            </div>
            <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-slate-900/8">
              <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-[linear-gradient(90deg,rgba(76,154,106,0.18),rgba(76,154,106,0.96),rgba(76,154,106,0.18))] animate-scan-across" />
            </div>
          </div>
        </div>

        <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
          {pipeline.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.label}
                className="flex items-center justify-between rounded-2xl border border-slate-900/10 bg-white/65 px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.03)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#4C9A6A]/10 text-[#4C9A6A] ring-1 ring-[#4C9A6A]/12">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-950">
                      {step.label}
                    </div>
                    <div className="text-xs text-slate-500">
                      Step {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
