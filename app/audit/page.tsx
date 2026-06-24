import type { Metadata } from "next";

import { AuditForm } from "@/components/audit/audit-form";
import { AuditPageShell } from "@/components/audit/audit-page-shell";

export const metadata: Metadata = {
  title: "Free AEO Audit",
  description:
    "Enter your website URL and get a free AI visibility audit across metadata, structured data, content quality, internal connectivity, technical compliance, and semantic clarity.",
};

export default function AuditPage() {
  return (
    <AuditPageShell>
      <AuditForm />
    </AuditPageShell>
  );
}
