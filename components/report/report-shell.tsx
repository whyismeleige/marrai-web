import type { AuditReportResult } from "@/features/audit/schemas";

import { ReportHeader } from "./report-header";
import { ScoreSummary } from "./score-summary";
import { CategoryScoreGrid } from "./category-score-grid";
import { FindingsSection } from "./findings-section";
import { PageBreakdownSection } from "./page-breakdown-section";
import { UnreachablePagesSection } from "./unreachable-pages-section";
import { ReportCta } from "./report-cta";

type ReportShellProps = {
  report: AuditReportResult;
  status: string;
};

export function ReportShell({ report, status }: ReportShellProps) {
  return (
    <div className="w-full max-w-5xl space-y-6">
      <div className="rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(247,249,244,0.98)_100%)] p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-7 lg:p-8">
        <ReportHeader report={report} status={status} />
        <div className="mt-6">
          <ScoreSummary report={report} />
        </div>
      </div>

      <CategoryScoreGrid report={report} />
      <FindingsSection report={report} />
      <PageBreakdownSection report={report} />
      <UnreachablePagesSection report={report} />
      <ReportCta />
    </div>
  );
}
