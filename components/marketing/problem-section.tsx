import { AlertTriangle, MessageSquareText, SearchCheck } from "lucide-react";

import { Section } from "@/components/layout/section";

function ProblemSection() {
  return (
    <Section className="border-y border-border/70 bg-muted/30">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-muted-foreground">What changed</p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            Search is becoming answer-driven.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Ranking well is no longer enough. AI answer engines synthesize, cite, and
            summarize from the pages they can interpret cleanly.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            {
              icon: SearchCheck,
              title: "Visibility now depends on machine readability",
              text: "Metadata, structured data, and clear internal connectivity shape what AI systems can parse and retrieve.",
            },
            {
              icon: MessageSquareText,
              title: "Citations are selective",
              text: "When the answer engine cannot trust the structure, it chooses stronger sources and skips the rest.",
            },
            {
              icon: AlertTriangle,
              title: "Surface quality matters",
              text: "Weak semantics and thin page structure hide the signal that operators need to see.",
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
        </div>
      </div>
    </Section>
  );
}

export { ProblemSection };
