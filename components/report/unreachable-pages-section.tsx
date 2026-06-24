import type { AuditReportResult } from "@/features/audit/schemas";

type UnreachablePagesSectionProps = {
  report: AuditReportResult;
};

function normalizeUnreachablePages(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item, index) => {
      if (typeof item === "string") {
        return { title: item, index };
      }

      if (item && typeof item === "object") {
        const candidate = item as Record<string, unknown>;
        const title =
          (typeof candidate.url === "string" && candidate.url) ||
          (typeof candidate.title === "string" && candidate.title) ||
          (typeof candidate.path === "string" && candidate.path) ||
          null;
        if (title) {
          return { title, index };
        }
      }

      return null;
    })
    .filter((item): item is { title: string; index: number } => Boolean(item));
}

export function UnreachablePagesSection({
  report,
}: UnreachablePagesSectionProps) {
  const pages = normalizeUnreachablePages(report.unreachable_pages);

  return (
    <section className="rounded-[2rem] border border-slate-900/10 bg-white/88 p-5 sm:p-7">
      <h2 className="text-xl font-medium tracking-[-0.02em] text-slate-950">
        Unreachable pages
      </h2>
      <div className="mt-5">
        {pages.length > 0 ? (
          <div className="space-y-3">
            {pages.map((page) => (
              <div
                key={`${page.title}-${page.index}`}
                className="rounded-2xl border border-slate-900/10 bg-white p-4 text-sm leading-6 text-slate-700"
              >
                {page.title}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            No unreachable pages found.
          </div>
        )}
      </div>
    </section>
  );
}
