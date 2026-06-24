import type { AuditReportResult } from "@/features/audit/schemas";

type ScoreSummaryProps = {
  report: AuditReportResult;
};

function scoreValue(value: unknown) {
  return typeof value === "number" && Number.isFinite(value)
    ? Math.round(value)
    : null;
}

function durationValue(value: unknown) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "—";
  }

  return `${value.toFixed(value >= 10 ? 1 : 2)}s`;
}

function SummaryCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string | null;
  accent?: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-900/10 bg-white/80 p-5">
      <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>
      <div className="mt-3 flex items-end justify-between gap-4">
        <div className="text-3xl font-medium text-slate-950">
          {value ?? "—"}
        </div>
        <div className={accent ?? "h-2.5 w-2.5 rounded-full bg-slate-300"} />
      </div>
    </div>
  );
}

export function ScoreSummary({ report }: ScoreSummaryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <SummaryCard
        label="Overall score"
        value={scoreValue(report.overall_score)}
        accent="h-2.5 w-2.5 rounded-full bg-[#4C9A6A]"
      />
      <SummaryCard
        label="Semantic score"
        value={scoreValue(report.semantic_score)}
        accent="h-2.5 w-2.5 rounded-full bg-slate-950"
      />
      <SummaryCard label="Pages crawled" value={scoreValue(report.pages_crawled)} />
      <SummaryCard
        label="Crawl duration"
        value={durationValue(report.crawl_duration_seconds)}
      />
    </div>
  );
}
