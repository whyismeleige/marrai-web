import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/marketing/hero";
import { ProblemSection } from "@/components/marketing/problem-section";
import { ProductPillars } from "@/components/marketing/product-pillars";
import { AuditWorks } from "@/components/marketing/audit-works";
import { ReportPreviewPlaceholder } from "@/components/marketing/report-preview-placeholder";
import { AudienceSection } from "@/components/marketing/audience-section";
import { ResearchPlaceholder } from "@/components/marketing/research-placeholder";
import { FinalCta } from "@/components/marketing/final-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <ProductPillars />
        <AuditWorks />
        <ReportPreviewPlaceholder />
        <AudienceSection />
        <ResearchPlaceholder />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
