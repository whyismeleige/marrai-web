import type { AuditReportResult } from "@/features/audit/schemas";
import { getMergedPageBreakdown } from "@/features/audit/report-adapter";

type PageBreakdownSectionProps = {
  report: AuditReportResult;
};

function normalizeTextItems(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => {
      if (typeof item === "string") {
        return item;
      }

      if (item && typeof item === "object") {
        const candidate = item as Record<string, unknown>;
        const text =
          candidate.title ??
          candidate.finding ??
          candidate.recommendation ??
          candidate.text ??
          candidate.message ??
          candidate.heading;
        if (typeof text === "string") {
          return text;
        }
      }

      return null;
    })
    .filter((item): item is string => Boolean(item));
}

function normalizeSingleText(value: unknown): string | null {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return normalizeTextItems(value)[0] ?? null;
  }

  if (value && typeof value === "object") {
    const candidate = value as Record<string, unknown>;
    const text =
      candidate.title ??
      candidate.finding ??
      candidate.recommendation ??
      candidate.text ??
      candidate.message ??
      candidate.heading;

    if (typeof text === "string") {
      return text;
    }
  }

  return null;
}

function formatCategoryScore(
  score: unknown,
  maxPossible: unknown,
): string {
  const scoreText =
    typeof score === "number" && Number.isFinite(score) ? Math.round(score) : null;
  const maxText =
    typeof maxPossible === "number" && Number.isFinite(maxPossible)
      ? Math.round(maxPossible)
      : null;

  if (scoreText === null) {
    return "Not available";
  }

  return maxText === null ? String(scoreText) : `${scoreText} / ${maxText}`;
}

function MetricRows({ metrics }: { metrics: Record<string, number> }) {
  const entries = Object.entries(metrics);

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        No metrics returned.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {entries.map(([key, value]) => (
        <div
          key={key}
          className="flex items-center justify-between gap-4 rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm text-slate-700"
        >
          <span className="font-medium text-slate-600">{key}</span>
          <span className="font-medium text-slate-950">{value}</span>
        </div>
      ))}
    </div>
  );
}

function CategoryDetails({
  title,
  category,
}: {
  title: string;
  category: {
    score?: number;
    max_possible?: number;
    metrics?: Record<string, number>;
    findings?: unknown[];
    recommendations?: unknown[];
  } | null;
}) {
  if (!category) {
    return (
      <section className="rounded-3xl border border-slate-900/10 bg-slate-50 p-5">
        <h4 className="text-sm font-medium text-slate-950">{title}</h4>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          No data returned for this category.
        </p>
      </section>
    );
  }

  const findings = normalizeTextItems(category.findings);
  const recommendations = normalizeTextItems(category.recommendations);

  return (
    <section className="rounded-3xl border border-slate-900/10 bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-medium text-slate-950">{title}</h4>
        <div className="text-sm font-medium text-slate-700">
          {formatCategoryScore(category.score, category.max_possible)}
        </div>
      </div>

      <div className="mt-4">
        <MetricRows metrics={category.metrics ?? {}} />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <h5 className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Findings
          </h5>
          <div className="mt-3 space-y-2">
            {findings.length > 0 ? (
              findings.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-900/10 bg-slate-50 p-3 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                No findings returned.
              </div>
            )}
          </div>
        </div>

        <div>
          <h5 className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Recommendations
          </h5>
          <div className="mt-3 space-y-2">
            {recommendations.length > 0 ? (
              recommendations.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-900/10 bg-slate-50 p-3 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                No recommendations returned.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SemanticSection({
  semanticPage,
}: {
  semanticPage: AuditReportResult["semantic_pages"][number] | undefined;
}) {
  if (!semanticPage) {
    return (
      <section className="rounded-3xl border border-slate-900/10 bg-slate-50 p-5">
        <h4 className="text-sm font-medium text-slate-950">Semantic analysis</h4>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          No semantic page data returned for this URL.
        </p>
      </section>
    );
  }

  const sections = Array.isArray(semanticPage.section_scores)
    ? semanticPage.section_scores
    : [];

  return (
    <section className="rounded-3xl border border-slate-900/10 bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-medium text-slate-950">Semantic analysis</h4>
        <div className="text-sm font-medium text-slate-700">
          {typeof semanticPage.overall_score === "number" &&
          Number.isFinite(semanticPage.overall_score)
            ? Math.round(semanticPage.overall_score)
            : "Not available"}
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-4">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Finding
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {normalizeSingleText(semanticPage.finding) ?? "No finding returned."}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-4">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Recommendation
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {normalizeSingleText(semanticPage.recommendation) ??
              "No recommendation returned."}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h5 className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          Section scores
        </h5>
        <div className="mt-3 space-y-3">
          {sections.length > 0 ? (
            sections.map((section, index) => (
              <div
                key={`${section.heading ?? "section"}-${index}`}
                className="rounded-2xl border border-slate-900/10 bg-slate-50 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm font-medium text-slate-950">
                    {section.heading ?? `Section ${index + 1}`}
                  </div>
                  <div className="text-sm font-medium text-slate-700">
                    {typeof section.alignment_score === "number" &&
                    Number.isFinite(section.alignment_score)
                      ? Math.round(section.alignment_score)
                      : "Not available"}
                  </div>
                </div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-900/10 bg-white p-3 text-sm leading-6 text-slate-700">
                    {typeof section.finding === "string" && section.finding
                      ? section.finding
                      : "No finding returned."}
                  </div>
                  <div className="rounded-2xl border border-slate-900/10 bg-white p-3 text-sm leading-6 text-slate-700">
                    {typeof section.recommendation === "string" &&
                    section.recommendation
                      ? section.recommendation
                      : "No recommendation returned."}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              No section scores returned.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ScoreChip({
  label,
  value,
}: {
  label: string;
  value: number | null | undefined;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-900/10">
      <span className="text-slate-500">{label}</span>
      <span className="text-slate-950">
        {typeof value === "number" && Number.isFinite(value)
          ? Math.round(value)
          : "—"}
      </span>
    </span>
  );
}

export function PageBreakdownSection({ report }: PageBreakdownSectionProps) {
  const rows = getMergedPageBreakdown(report);

  return (
    <section className="rounded-[2rem] border border-slate-900/10 bg-white/88 p-5 sm:p-7">
      <div>
        <h2 className="text-xl font-medium tracking-[-0.02em] text-slate-950">
          Page-level breakdown
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Click a page to see deterministic and semantic detail side by side.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {rows.length > 0 ? (
          rows.map((row) => {
            const page = row.page;
            return (
              <details
                key={row.url}
                className="group rounded-[1.75rem] border border-slate-900/10 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.035)]"
              >
                <summary className="list-none cursor-pointer px-5 py-5 sm:px-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-slate-950 break-all">
                        {row.url}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <ScoreChip label="Meta" value={page?.metadata?.score} />
                        <ScoreChip
                          label="Content"
                          value={page?.content_quality?.score}
                        />
                        <ScoreChip
                          label="Schema"
                          value={page?.structured_data?.score}
                        />
                        <ScoreChip
                          label="Conn."
                          value={page?.connectivity?.score}
                        />
                        <ScoreChip
                          label="Tech"
                          value={page?.technical_compliance?.score}
                        />
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <div className="rounded-2xl border border-slate-900/10 bg-slate-50 px-3 py-2 text-right">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                          Overall
                        </div>
                        <div className="mt-1 text-sm font-medium text-slate-950">
                          {row.overallScore ?? "Not available"}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-900/10 bg-slate-50 px-3 py-2 text-right">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                          Semantic
                        </div>
                        <div className="mt-1 text-sm font-medium text-slate-950">
                          {row.semanticScore ?? "Not available"}
                        </div>
                      </div>
                    </div>
                  </div>
                </summary>

                <div className="border-t border-slate-900/10 px-5 py-5 sm:px-6">
                  <div className="grid gap-5 lg:grid-cols-2">
                    <div className="space-y-4">
                      <CategoryDetails
                        title="Metadata"
                        category={page?.metadata ?? null}
                      />
                      <CategoryDetails
                        title="Content Quality"
                        category={page?.content_quality ?? null}
                      />
                      <CategoryDetails
                        title="Structured Data"
                        category={page?.structured_data ?? null}
                      />
                      <CategoryDetails
                        title="Connectivity"
                        category={page?.connectivity ?? null}
                      />
                      <CategoryDetails
                        title="Technical Compliance"
                        category={page?.technical_compliance ?? null}
                      />
                    </div>

                    <SemanticSection semanticPage={row.semanticPage} />
                  </div>
                </div>
              </details>
            );
          })
        ) : (
          <div className="rounded-3xl border border-slate-900/10 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
            No page breakdown returned.
          </div>
        )}
      </div>
    </section>
  );
}
