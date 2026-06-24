import { Section } from "@/components/layout/section";

const audiences = [
  {
    title: "SEO consultants",
    text: "Use it to spot technical and semantic gaps faster during client reviews.",
  },
  {
    title: "SaaS founders",
    text: "See whether the site can support brand discovery in answer engines.",
  },
  {
    title: "Growth and content teams",
    text: "Turn crawl findings into a prioritized content and structure backlog.",
  },
  {
    title: "AI search agencies",
    text: "Bring a consistent report framework to audits and client communication.",
  },
];

function AudienceSection() {
  return (
    <Section className="border-y border-border/70 bg-muted/20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-muted-foreground">Audience</p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            Built for serious operators across search, content, and strategy.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {audiences.map((audience) => (
            <div key={audience.title} className="border-b border-border/70 pb-4">
              <h3 className="text-base font-medium text-foreground">{audience.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{audience.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export { AudienceSection };
