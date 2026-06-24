import { Layers3, LineChart, Search } from "lucide-react";

import { Section } from "@/components/layout/section";

const pillars = [
  {
    icon: Search,
    title: "Visibility",
    text: "Measure whether answer engines can see the pages that matter and whether they can retrieve the right evidence.",
    emphasis: true,
  },
  {
    icon: Layers3,
    title: "Structure",
    text: "Check the metadata, schema, headings, and internal links that shape machine interpretation.",
  },
  {
    icon: LineChart,
    title: "Clarity",
    text: "Surface the semantic gaps that stop a site from being cited cleanly and consistently.",
  },
];

function ProductPillars() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-muted-foreground">Product pillars</p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            Built for the operators who need signal, not theater.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Marrai stays close to the work: what AI systems can understand, where the
            citations come from, and which structural issues still block visibility.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={
                  pillar.emphasis
                    ? "rounded-[16px] border border-border bg-card p-5 shadow-sm"
                    : "rounded-[16px] border border-border/70 bg-background p-5"
                }
              >
                <Icon className="size-5 text-primary" />
                <h3 className="mt-4 text-base font-medium text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export { ProductPillars };
