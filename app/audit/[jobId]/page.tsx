import type { Metadata } from "next";

import { AuditPageShell } from "@/components/audit/audit-page-shell";
import { AuditErrorState } from "@/components/audit/audit-error-state";
import { AuditStatusPanel } from "@/components/audit/audit-status-panel";
import { auditJobIdSchema } from "@/features/audit/hooks";

export const metadata: Metadata = {
  title: "Audit Report",
  description:
    "View your Marrai AI visibility audit status and report.",
};

type AuditJobPageProps = {
  params: Promise<{ jobId: string }>;
};

export default async function AuditJobPage({ params }: AuditJobPageProps) {
  const { jobId } = await params;
  const parsedJobId = auditJobIdSchema.safeParse(jobId);

  if (!parsedJobId.success) {
    return (
      <AuditPageShell>
        <AuditErrorState
          title="Invalid audit link"
          message="This audit link is not valid. Return to the audit page and start a new report."
        />
      </AuditPageShell>
    );
  }

  return (
    <AuditPageShell>
      <AuditStatusPanel jobId={parsedJobId.data} />
    </AuditPageShell>
  );
}
