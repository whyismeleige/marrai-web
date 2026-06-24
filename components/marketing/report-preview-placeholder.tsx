import { Section } from "@/components/layout/section";

function ReportPreviewPlaceholder() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-muted-foreground">Report preview</p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            The report reads like a diagnostic, not a dump of JSON.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            This placeholder shows the shell that will later hold the crawl score, semantic
            score, category analysis, findings, and recommendations.
          </p>
        </div>

        <div className="rounded-[16px] border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="text-sm font-medium text-foreground">Report shell</p>
              <p className="mt-1 text-sm text-muted-foreground">Placeholder only</p>
            </div>
            <div className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
              Pending data
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[180px_minmax(0,1fr)]">
            <div className="rounded-xl border border-border/70 bg-background p-4">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-[-0.04em] text-foreground">—</span>
                <span className="pb-1 text-sm text-muted-foreground">overall score</span>
              </div>
              <div className="mt-5 space-y-3">
                {["Metadata", "Content", "Structured data", "Connectivity"].map((label) => (
                  <div key={label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{label}</span>
                      <span>—</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                "Deterministic findings",
                "Deterministic recommendations",
                "Semantic findings",
                "Semantic recommendations",
                "Page-level breakdown",
                "Unreachable pages",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export { ReportPreviewPlaceholder };
