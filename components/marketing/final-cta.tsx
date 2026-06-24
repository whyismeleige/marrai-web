import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

function FinalCta() {
  return (
    <Section id="final-cta" className="pb-20 sm:pb-24 lg:pb-28">
      <div className="rounded-[16px] border border-border bg-card px-6 py-8 shadow-sm sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">Final CTA</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              Start with the audit, then use the report to decide what to fix.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Marrai gives you a clean first read on AI visibility without making the
              interface feel inflated or noisy.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="gap-2">
              <Link href="#free-audit">
                Run free AEO audit
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#research">Read the research</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export { FinalCta };
