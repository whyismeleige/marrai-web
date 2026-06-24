import { cn } from "@/lib/utils";
import { auditProgressSteps } from "@/features/audit/hooks";

type AuditProgressStepsProps = {
  activeStatus:
    | "pending"
    | "started"
    | "crawling"
    | "scoring"
    | "success"
    | "failure";
};

export function AuditProgressSteps({ activeStatus }: AuditProgressStepsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-4">
      {auditProgressSteps.map((step, index) => {
        const isCurrent = step.statuses.includes(activeStatus as never);
        const isComplete =
          activeStatus === "started"
            ? index < 1
            : activeStatus === "crawling"
              ? index < 2
              : activeStatus === "scoring"
                ? index < 3
                : activeStatus === "success" || activeStatus === "failure"
                  ? true
                  : false;
        const state = isCurrent ? "active" : isComplete ? "complete" : "inactive";

        return (
          <div
            key={step.id}
            className={cn(
              "rounded-2xl border px-4 py-4 transition-colors",
              state === "active" || state === "complete"
                ? "border-slate-900/10 bg-white/85"
                : "border-slate-900/8 bg-white/55",
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <div
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-medium tracking-[0.18em]",
                  state === "complete" || state === "active"
                    ? "bg-slate-950 text-white"
                    : "bg-slate-200 text-slate-600",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div
                className={cn(
                  "h-2.5 w-2.5 rounded-full",
                  state === "active"
                    ? "bg-[#4C9A6A]"
                    : state === "complete"
                      ? "bg-slate-950"
                      : "bg-slate-300",
                )}
              />
            </div>
            <div className="mt-4 text-sm font-medium text-slate-950">
              {step.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
