type PageBreakdownSectionProps = {
  report: Record<string, unknown>;
};

function normalizePages(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item, index) => {
      if (typeof item === "string") {
        return {
          title: item,
          detail: null,
          index,
        };
      }

      if (item && typeof item === "object") {
        const candidate = item as Record<string, unknown>;
        return {
          title:
            (typeof candidate.url === "string" && candidate.url) ||
            (typeof candidate.title === "string" && candidate.title) ||
            `Page ${index + 1}`,
          detail:
            typeof candidate.summary === "string"
              ? candidate.summary
              : typeof candidate.reason === "string"
                ? candidate.reason
                : typeof candidate.status === "string"
                  ? candidate.status
                  : null,
          index,
        };
      }

      return null;
    })
    .filter(
      (item): item is { title: string; detail: string | null; index: number } =>
        Boolean(item),
    );
}

export function PageBreakdownSection({ report }: PageBreakdownSectionProps) {
  const pages = normalizePages(report.pages);
  const semanticPages = normalizePages(report.semantic_pages);

  return (
    <section className="rounded-[2rem] border border-slate-900/10 bg-white/88 p-5 sm:p-7">
      <h2 className="text-xl font-medium tracking-[-0.02em] text-slate-950">
        Page-level breakdown
      </h2>
      <div className="mt-5 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium text-slate-700">Pages</h3>
          <div className="mt-3 space-y-3">
            {pages.length > 0 ? (
              pages.map((page) => (
                <article
                  key={`${page.title}-${page.index}`}
                  className="rounded-2xl border border-slate-900/10 bg-white p-4"
                >
                  <div className="text-sm font-medium text-slate-950">
                    {page.title}
                  </div>
                  {page.detail ? (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {page.detail}
                    </p>
                  ) : null}
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                No page breakdown returned.
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-700">Semantic pages</h3>
          <div className="mt-3 space-y-3">
            {semanticPages.length > 0 ? (
              semanticPages.map((page) => (
                <article
                  key={`${page.title}-${page.index}`}
                  className="rounded-2xl border border-slate-900/10 bg-white p-4"
                >
                  <div className="text-sm font-medium text-slate-950">
                    {page.title}
                  </div>
                  {page.detail ? (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {page.detail}
                    </p>
                  ) : null}
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                No semantic page breakdown returned.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
