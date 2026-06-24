import Link from "next/link";
import { BookOpenText, FileSearch2, Sparkles } from "lucide-react";

import { Section } from "@/components/layout/section";

function ResearchPlaceholder() {
  return (
    <Section id="research">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-muted-foreground">Blog / research</p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            The research layer will carry the long-form authority work.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The future blog needs to feel like a technical publication: sharp analysis,
            structured examples, and an evidence-aware point of view.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            {
              icon: BookOpenText,
              title: "AEO playbooks",
              text: "Operational guides for site owners, marketers, and SEO teams.",
            },
            {
              icon: FileSearch2,
              title: "Evidence-led analyses",
              text: "Posts that explain how AI answer engines interpret structure and citations.",
            },
            {
              icon: Sparkles,
              title: "Future topic pages",
              text: "Routes for AEO, citations, structured data, and semantic optimization.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="grid gap-3 border-b border-border/70 pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[20px_minmax(0,1fr)]"
              >
                <Icon className="mt-0.5 size-5 text-primary" />
                <div>
                  <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              </div>
            );
          })}
          <div className="pt-2">
            <Link
              href="#final-cta"
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              See the next step
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export { ResearchPlaceholder };
