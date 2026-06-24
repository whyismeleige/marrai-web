import { Check } from "lucide-react";

import { auditProgressSteps } from "@/features/audit/hooks";
import { cn } from "@/lib/utils";

type AuditProgressStepsProps = {
  activeStatus:
    | "pending"
    | "started"
    | "crawling"
    | "scoring"
    | "success"
    | "failure";
};

const stepIndexByStatus = {
  pending: 0,
  started: 0,
  crawling: 1,
  scoring: 2,
  success: 3,
  failure: 3,
} as const;

function getStepState(
  stepIndex: number,
  activeStatus: AuditProgressStepsProps["activeStatus"],
) {
  const currentIndex = stepIndexByStatus[activeStatus];

  if (activeStatus === "success" || activeStatus === "failure") {
    return "complete" as const;
  }

  if (stepIndex < currentIndex) {
    return "complete" as const;
  }

  if (stepIndex === currentIndex) {
    return "active" as const;
  }

  return "inactive" as const;
}

export function AuditProgressSteps({ activeStatus }: AuditProgressStepsProps) {
  return (
    <div className="relative">
      <div className="absolute left-6 right-6 top-8 hidden h-px bg-slate-200 xl:block" />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {auditProgressSteps.map((step, index) => {
          const state = getStepState(index, activeStatus);

          return (
            <div
              key={step.id}
              className={cn(
                "relative rounded-2xl border p-4 transition-all",
                state === "active"
                  ? "border-emerald-100 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)]"
                  : state === "complete"
                    ? "border-slate-900/10 bg-white/90"
                    : "border-slate-900/8 bg-white/60",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <div
                  className={cn(
                    "flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-[11px] font-medium tracking-[0.18em]",
                    state === "complete"
                      ? "bg-slate-950 text-white"
                      : state === "active"
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                        : "bg-slate-100 text-slate-500",
                  )}
                >
                  {state === "complete" ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    String(index + 1).padStart(2, "0")
                  )}
                </div>
                <div
                  className={cn(
                    "h-2.5 w-2.5 rounded-full",
                    state === "active"
                      ? "bg-[#4C9A6A] motion-safe:animate-pulse motion-reduce:animate-none"
                      : state === "complete"
                        ? "bg-slate-950"
                        : "bg-slate-300",
                  )}
                />
              </div>

              <div className="mt-4 text-sm font-medium text-slate-950">
                {step.label}
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {state === "complete"
                  ? "Finished."
                  : state === "active"
                    ? "In progress."
                    : "Waiting to begin."}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
