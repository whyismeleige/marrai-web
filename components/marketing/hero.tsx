import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";

function Hero() {
  return (
    <section className="pt-10 pb-14 sm:pt-14 lg:pt-18">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-5 border-border/80 bg-background px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              AI visibility command center
            </Badge>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              See if AI answer engines can understand and cite your website.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Marrai audits your site for AI visibility across metadata, content quality,
              structured data, internal connectivity, technical compliance, and semantic clarity.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="#free-audit">
                  Run free AEO audit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="#research">Read the AEO playbook</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1.5">
                <ShieldCheck className="size-4 text-primary" />
                Machine-readable audit
              </span>
              <span className="inline-flex items-center rounded-full border border-border/70 bg-background px-3 py-1.5">
                Up to 20 pages crawled
              </span>
              <span className="inline-flex items-center rounded-full border border-border/70 bg-background px-3 py-1.5">
                Deterministic + semantic scoring
              </span>
            </div>
          </div>

          <div className="rounded-[16px] border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="text-sm font-medium text-foreground">Report shell preview</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Structure only. Real audit data will populate later.
                </p>
              </div>
              <Badge variant="secondary" className="bg-muted text-foreground">
                Placeholder
              </Badge>
            </div>

            <div className="mt-5 grid gap-4">
              {[
                ["Overall score", "—"],
                ["Semantic score", "—"],
                ["Pages crawled", "—"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-border/70 bg-background px-4 py-3"
                >
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Metadata",
                "Content Quality",
                "Structured Data",
                "Connectivity",
                "Technical Compliance",
                "Semantic Alignment",
              ].map((item, index) => (
                <div key={item} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{item}</span>
                    <span className="text-muted-foreground">—</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-primary/70"
                      style={{ width: `${30 + index * 8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
