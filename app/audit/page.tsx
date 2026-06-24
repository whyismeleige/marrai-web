import { AuditForm } from "@/components/audit/audit-form";
import { AuditPageShell } from "@/components/audit/audit-page-shell";

export default function AuditPage() {
  return (
    <AuditPageShell>
      <AuditForm />
    </AuditPageShell>
  );
}
