type CategoryScoreGridProps = {
  report: Record<string, unknown>;
};

type Category = {
  key: string;
  label: string;
  scoreKeys: string[];
};

const categories: Category[] = [
  { key: "metadata", label: "Metadata", scoreKeys: ["metadata_score", "metadata"] },
  {
    key: "content_quality",
    label: "Content Quality",
    scoreKeys: ["content_quality_score", "content_score"],
  },
  {
    key: "structured_data",
    label: "Structured Data",
    scoreKeys: ["structured_data_score", "schema_score"],
  },
  {
    key: "connectivity",
    label: "Connectivity",
    scoreKeys: ["connectivity_score", "internal_connectivity_score"],
  },
  {
    key: "technical_compliance",
    label: "Technical Compliance",
    scoreKeys: ["technical_compliance_score", "technical_score"],
  },
  {
    key: "semantic_alignment",
    label: "Semantic Alignment",
    scoreKeys: ["semantic_alignment_score", "semantic_score"],
  },
];

function getCategoryScore(report: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = report[key];
    if (typeof value === "number" && Number.isFinite(value)) {
      return Math.round(value);
    }
    if (typeof value === "object" && value) {
      const nested = value as Record<string, unknown>;
      const nestedValue = nested.score ?? nested.value ?? nested.overall;
      if (typeof nestedValue === "number" && Number.isFinite(nestedValue)) {
        return Math.round(nestedValue);
      }
    }
  }
  return null;
}

function clampScore(score: number) {
  return Math.max(0, Math.min(score, 100));
}

export function CategoryScoreGrid({ report }: CategoryScoreGridProps) {
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
          const score = getCategoryScore(report, category.scoreKeys);

          return (
            <article
              key={category.key}
              className="rounded-3xl border border-slate-900/10 bg-white p-5"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                {category.label}
              </div>
              <div className="mt-3 text-3xl font-medium text-slate-950">
                {score ?? "—"}
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-[#4C9A6A]"
                  style={{
                    width:
                      typeof score === "number"
                        ? `${clampScore(score)}%`
                        : "0%",
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
