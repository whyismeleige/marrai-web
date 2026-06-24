type FindingsSectionProps = {
  report: Record<string, unknown>;
};

function normalizeItems(value: unknown): string[] {
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
        const title = candidate.title ?? candidate.finding ?? candidate.text ?? candidate.message;
        if (typeof title === "string") {
          return title;
        }
      }

      return null;
    })
    .filter((item): item is string => Boolean(item));
}

function SectionList({
  title,
  items,
  emptyMessage,
}: {
  title: string;
  items: string[];
  emptyMessage: string;
}) {
  return (
    <section className="rounded-[2rem] border border-slate-900/10 bg-white/88 p-5 sm:p-7">
      <h2 className="text-xl font-medium tracking-[-0.02em] text-slate-950">
        {title}
      </h2>
      <div className="mt-5 space-y-3">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-900/10 bg-white p-4 text-sm leading-6 text-slate-700"
            >
              {item}
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            {emptyMessage}
          </div>
        )}
      </div>
    </section>
  );
}

export function FindingsSection({ report }: FindingsSectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <SectionList
        title="Deterministic findings"
        items={normalizeItems(report.findings)}
        emptyMessage="No critical findings returned."
      />
      <SectionList
        title="Deterministic recommendations"
        items={normalizeItems(report.recommendations)}
        emptyMessage="No deterministic recommendations returned."
      />
      <SectionList
        title="Semantic findings"
        items={normalizeItems(report.semantic_findings)}
        emptyMessage="No semantic findings returned."
      />
      <SectionList
        title="Semantic recommendations"
        items={normalizeItems(report.semantic_recommendations)}
        emptyMessage="No semantic recommendations returned."
      />
    </div>
  );
}
