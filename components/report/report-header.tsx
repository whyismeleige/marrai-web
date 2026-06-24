import { CheckCircle2, Clock3, Globe2 } from "lucide-react";

function formatNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : "—";
}

function formatDuration(value: unknown) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "—";
  }

  return `${value.toFixed(value >= 10 ? 1 : 2)}s`;
}

type ReportHeaderProps = {
  report: Record<string, unknown>;
  status: string;
};

export function ReportHeader({ report, status }: ReportHeaderProps) {
  const url = typeof report.url === "string" ? report.url : "Unknown URL";
  const pagesCrawled = formatNumber(report.pages_crawled);
  const crawlDuration = formatDuration(report.crawl_duration_seconds);

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div className="max-w-3xl">
        <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-900/10">
          AUDIT REPORT
        </div>
        <h1 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
          {url}
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Marrai audited your site for metadata, schema, content quality,
          connectivity, technical compliance, and semantic clarity.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[360px]">
        <div className="rounded-2xl border border-slate-900/10 bg-white/80 p-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
            <Globe2 className="h-3.5 w-3.5 text-slate-500" />
            Status
          </div>
          <div className="mt-2 text-sm font-medium text-slate-950">{status}</div>
        </div>
        <div className="rounded-2xl border border-slate-900/10 bg-white/80 p-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
            <CheckCircle2 className="h-3.5 w-3.5 text-slate-500" />
            Pages
          </div>
          <div className="mt-2 text-sm font-medium text-slate-950">
            {pagesCrawled}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-900/10 bg-white/80 p-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
            <Clock3 className="h-3.5 w-3.5 text-slate-500" />
            Duration
          </div>
          <div className="mt-2 text-sm font-medium text-slate-950">
            {crawlDuration}
          </div>
        </div>
      </div>
    </div>
  );
}
