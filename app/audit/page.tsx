import type { Metadata } from "next";

import { AuditForm } from "@/components/audit/audit-form";
import { AuditPageShell } from "@/components/audit/audit-page-shell";
import { normalizeAuditUrl } from "@/features/audit/url";

export const metadata: Metadata = {
  title: "Free AEO Audit",
  description:
    "Enter your website URL and get a free AI visibility audit across metadata, structured data, content quality, internal connectivity, technical compliance, and semantic clarity.",
};

type AuditPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AuditPage({ searchParams }: AuditPageProps) {
  const resolvedSearchParams = await searchParams;
  const urlParam = resolvedSearchParams?.url;
  const initialUrlValue = Array.isArray(urlParam) ? urlParam[0] : urlParam;
  const initialUrl =
    typeof initialUrlValue === "string"
      ? normalizeAuditUrl(initialUrlValue) ?? undefined
      : undefined;

  return (
    <AuditPageShell>
      <AuditForm initialUrl={initialUrl} />
    </AuditPageShell>
  );
}
