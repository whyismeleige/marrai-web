import { CheckCircle2, Globe, Route, WandSparkles } from "lucide-react";

import { Section } from "@/components/layout/section";

const steps = [
  {
    icon: Globe,
    title: "Submit a URL",
    text: "Add the site you want reviewed. Email is optional for the first pass.",
  },
  {
    icon: Route,
    title: "Crawl the pages",
    text: "Marrai checks the pages that matter and builds a deterministic view of the site.",
  },
  {
    icon: WandSparkles,
    title: "Score the signals",
    text: "The report combines structured checks with semantic analysis.",
  },
  {
    icon: CheckCircle2,
    title: "Review the findings",
    text: "You get clear recommendations, page-level breakdowns, and a next step.",
  },
];

function AuditWorks() {
  return (
    <Section id="free-audit" className="border-y border-border/70 bg-muted/20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-muted-foreground">How the free audit works</p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            A fast path from URL to diagnosis.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The first release stays simple: submit the site, inspect the crawl, and read a
            report that feels like a real operator tool.
          </p>
        </div>

        <div className="grid gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="grid gap-4 border-b border-border/70 pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[48px_minmax(0,1fr)]"
              >
                <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background text-sm font-medium text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 text-primary" />
                    <h3 className="text-base font-medium text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export { AuditWorks };
