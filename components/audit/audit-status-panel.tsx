"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import {
  auditStatusMessages,
} from "@/features/audit/hooks";
import { auditPollResponseSchema } from "@/features/audit/schemas";
import { ReportShell } from "@/components/report/report-shell";

import { AuditErrorState } from "./audit-error-state";
import { AuditProgressSteps } from "./audit-progress-steps";

type AuditStatusPanelProps = {
  jobId: string;
};

type ProxyError = {
  ok: false;
  code: "RATE_LIMITED" | "VALIDATION_ERROR" | "BACKEND_ERROR" | "NETWORK_ERROR" | "NOT_FOUND";
  message: string;
};

type ProxySuccess<T> = {
  ok: true;
  data: T;
};

function isProxyError(value: unknown): value is ProxyError {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    candidate.ok === false &&
    typeof candidate.code === "string" &&
    typeof candidate.message === "string"
  );
}

function isProxySuccess<T>(value: unknown): value is ProxySuccess<T> {
  return !!value && typeof value === "object" && (value as Record<string, unknown>).ok === true;
}

async function fetchAuditStatus(jobId: string) {
  const response = await fetch(`/api/audit/${encodeURIComponent(jobId)}`, {
    cache: "no-store",
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    if (isProxyError(payload)) {
      throw new Error(payload.message);
    }

    throw new Error("The audit status could not be loaded.");
  }

  if (!isProxySuccess(payload)) {
    throw new Error("The audit service returned an unexpected response.");
  }

  const parsed = auditPollResponseSchema.safeParse(payload.data);
  if (!parsed.success) {
    throw new Error("The audit service returned malformed data.");
  }

  return parsed.data;
}

export function AuditStatusPanel({ jobId }: AuditStatusPanelProps) {
  const query = useQuery({
    queryKey: ["audit-status", jobId],
    queryFn: () => fetchAuditStatus(jobId),
    refetchInterval: (query) => {
      const status = query.state.data?.status;
      if (status === "success" || status === "failure") {
        return false;
      }
      return 3000;
    },
  });

  if (query.isLoading) {
    return (
      <div className="w-full max-w-3xl rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(247,249,244,0.98)_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="flex items-center gap-3 text-slate-700">
          <Loader2 className="h-5 w-5 animate-spin text-[#4C9A6A]" />
          <span className="text-sm font-medium">Preparing your audit</span>
        </div>
        <div className="mt-6 grid gap-4">
          <div className="h-24 rounded-2xl bg-white/70 ring-1 ring-slate-900/8" />
          <div className="h-28 rounded-2xl bg-white/70 ring-1 ring-slate-900/8" />
        </div>
      </div>
    );
  }

  if (query.isError) {
    return (
      <AuditErrorState
        title="We could not load the audit"
        message={
          query.error instanceof Error
            ? query.error.message
            : "Try again in a moment."
        }
      />
    );
  }

  const data = query.data;

  if (!data) {
    return (
      <AuditErrorState
        title="We could not load the audit"
        message="The audit service did not return any data. Try again in a moment."
      />
    );
  }

  const statusMessage = auditStatusMessages[data.status];

  if (data.status === "success" && data.result) {
    return <ReportShell report={data.result as Record<string, unknown>} status={data.status} />;
  }

  return (
    <div className="w-full max-w-3xl rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(247,249,244,0.98)_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-900/10">
            AUDIT STATUS
          </div>
          <h1 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl">
            {statusMessage}
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            {data.status === "success"
              ? "Your report data is ready."
              : data.status === "failure"
                ? data.error_message ?? "The audit could not be completed."
                : "Marrai is processing your site now."}
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-600 ring-1 ring-slate-900/10">
          <span
            className={
              data.status === "failure"
                ? "h-2.5 w-2.5 rounded-full bg-rose-500"
                : data.status === "success"
                  ? "h-2.5 w-2.5 rounded-full bg-[#4C9A6A]"
                  : "h-2.5 w-2.5 rounded-full bg-amber-500"
            }
          />
          {data.status}
        </div>
      </div>

      <div className="mt-8">
        <AuditProgressSteps activeStatus={data.status} />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-900/10 bg-white/80 p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Pages crawled
          </div>
          <div className="mt-3 text-3xl font-medium text-slate-950">
            {data.result?.pages_crawled ?? "—"}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-900/10 bg-white/80 p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Overall score
          </div>
          <div className="mt-3 text-3xl font-medium text-slate-950">
            {data.result?.overall_score ?? "—"}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-900/10 bg-white/80 p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Semantic score
          </div>
          <div className="mt-3 text-3xl font-medium text-slate-950">
            {data.result?.semantic_score ?? "—"}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-900/10 bg-white/75 p-6 text-sm leading-7 text-slate-600">
        {data.status === "failure"
          ? "The audit completed with an error. You can start a new audit from the homepage."
          : "This page updates automatically every few seconds until the audit finishes."}
      </div>
    </div>
  );
}
