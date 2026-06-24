import type { AuditReportResult } from "@/features/audit/schemas";
import { clampScore, getSiteCategoryScores } from "@/features/audit/report-adapter";

type CategoryScoreGridProps = {
  report: AuditReportResult;
};

export function CategoryScoreGrid({ report }: CategoryScoreGridProps) {
  const categories = getSiteCategoryScores(report);

  return (
    <section className="rounded-[2rem] border border-slate-900/10 bg-white/88 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-medium tracking-[-0.02em] text-slate-950">
            Category scores
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Core signals that shape AI visibility.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const score = category.score;

          return (
            <article
              key={category.key}
              className="rounded-3xl border border-slate-900/10 bg-white p-5"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                {category.label}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {category.description}
              </p>
              <div className="mt-4 text-3xl font-medium text-slate-950">
                {score === null ? "Not available" : score}
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-[#4C9A6A]"
                  style={{
                    width: `${clampScore(score) ?? 0}%`,
                  }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
