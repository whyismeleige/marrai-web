"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Check,
  CheckCircle2,
  FileText,
  Globe2,
  Link2,
  Loader2,
  Search,
  Sparkles,
} from "lucide-react";

import { ReportShell } from "@/components/report/report-shell";
import { auditStatusMessages } from "@/features/audit/hooks";
import { auditPollResponseSchema } from "@/features/audit/schemas";
import { cn } from "@/lib/utils";

import { AuditErrorState } from "./audit-error-state";
import { AuditProgressSteps } from "./audit-progress-steps";

type AuditStatusPanelProps = {
  jobId: string;
};

type ProxyError = {
  ok: false;
  code:
    | "RATE_LIMITED"
    | "VALIDATION_ERROR"
    | "BACKEND_ERROR"
    | "NETWORK_ERROR"
    | "NOT_FOUND";
  message: string;
};

type ProxySuccess<T> = {
  ok: true;
  data: T;
};

type ActivityState = "completed" | "active" | "queued";

type ActivityRow = {
  title: string;
  description: string;
  icon: typeof Globe2;
  state: ActivityState;
};

const statusCopy = {
  pending: {
    title: "Preparing your audit",
    subtitle: "Marrai is validating the request and preparing the crawler.",
    pill: "pending",
    dotClass: "bg-slate-400",
    pillClass: "bg-slate-50 text-slate-700 ring-slate-900/10",
  },
  started: {
    title: "Starting crawler",
    subtitle: "Marrai is setting up the audit pipeline for your website.",
    pill: "started",
    dotClass: "bg-slate-400",
    pillClass: "bg-slate-50 text-slate-700 ring-slate-900/10",
  },
  crawling: {
    title: "Crawling your website",
    subtitle:
      "Marrai is discovering pages, reading metadata, and collecting machine-readable signals.",
    pill: "crawling",
    dotClass: "bg-amber-500",
    pillClass: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  scoring: {
    title: "Scoring AI visibility",
    subtitle:
      "Marrai is evaluating metadata, schema, content quality, connectivity, and semantic clarity.",
    pill: "scoring",
    dotClass: "bg-[#4C9A6A]",
    pillClass: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  success: {
    title: "Your report is ready",
    subtitle: "Marrai finished analyzing your site.",
    pill: "success",
    dotClass: "bg-[#4C9A6A]",
    pillClass: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  failure: {
    title: "The audit could not be completed",
    subtitle: "",
    pill: "failure",
    dotClass: "bg-rose-400",
    pillClass: "bg-rose-50 text-rose-700 ring-rose-100",
  },
} as const;

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
  return (
    !!value && typeof value === "object" && (value as Record<string, unknown>).ok === true
  );
}

function getStatusContent(status: keyof typeof statusCopy) {
  return statusCopy[status];
}

function getActivityRows(status: keyof typeof statusCopy): ActivityRow[] {
  if (status === "crawling") {
    return [
      {
        title: "Discovering crawlable pages",
        description: "Finding public URLs and mapping the site surface.",
        icon: Globe2,
        state: "completed",
      },
      {
        title: "Reading metadata and schema",
        description: "Parsing titles, descriptions, headings, and structured data.",
        icon: FileText,
        state: "active",
      },
      {
        title: "Collecting content and link signals",
        description: "Inspecting internal connections and content signals.",
        icon: Link2,
        state: "queued",
      },
    ];
  }

  if (status === "scoring") {
    return [
      {
        title: "Scoring deterministic AEO signals",
        description: "Converting crawl data into category scores.",
        icon: CheckCircle2,
        state: "completed",
      },
      {
        title: "Checking semantic alignment",
        description: "Evaluating how clearly pages answer search intent.",
        icon: Sparkles,
        state: "active",
      },
      {
        title: "Preparing recommendations",
        description: "Organizing the findings into a report-ready summary.",
        icon: Loader2,
        state: "queued",
      },
    ];
  }

  return [
    {
      title: "Validating website URL",
      description: "Checking the input and preparing the audit request.",
      icon: Globe2,
      state: "active",
    },
    {
      title: "Preparing crawl queue",
      description: "Setting up the pages Marrai will inspect first.",
      icon: Search,
      state: "queued",
    },
    {
      title: "Starting audit worker",
      description: "Launching the backend job that will build your report.",
      icon: Loader2,
      state: "queued",
    },
  ];
}

function ActivityIndicator({ state }: { state: ActivityState }) {
  if (state === "completed") {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-2.5 py-1 text-[11px] font-medium text-white">
        <Check className="h-3.5 w-3.5" />
        Completed
      </div>
    );
  }

  if (state === "active") {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-100">
        <span className="h-2 w-2 rounded-full bg-[#4C9A6A] motion-safe:animate-pulse motion-reduce:animate-none" />
        Working
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500 ring-1 ring-slate-900/10">
      <span className="h-2 w-2 rounded-full bg-slate-300" />
      Queued
    </div>
  );
}

function ActivityRowCard({ row }: { row: ActivityRow }) {
  const Icon = row.icon;

  return (
    <div
      className={cn(
        "rounded-2xl border p-4 transition-colors",
        row.state === "active"
          ? "border-emerald-100 bg-emerald-50/55"
          : row.state === "completed"
            ? "border-slate-900/10 bg-white"
            : "border-slate-900/10 bg-slate-50",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 gap-3">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1",
              row.state === "active"
                ? "bg-emerald-50 text-[#4C9A6A] ring-emerald-100"
                : row.state === "completed"
                  ? "bg-slate-950 text-white ring-slate-950"
                  : "bg-white text-slate-500 ring-slate-900/10",
            )}
          >
            <Icon className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-medium text-slate-950">{row.title}</div>
            <p className="mt-1 text-sm leading-6 text-slate-600">{row.description}</p>
          </div>
        </div>
        <div className="shrink-0 pt-0.5">
          <ActivityIndicator state={row.state} />
        </div>
      </div>
    </div>
  );
}

function ActivityPanel({
  status,
}: {
  status: keyof typeof statusCopy;
}) {
  const rows = getActivityRows(status);

  return (
    <section className="rounded-[1.75rem] border border-slate-900/10 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-medium tracking-[-0.02em] text-slate-950">
            What Marrai is doing
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Live progress while the audit is running.
          </p>
        </div>
        <div className="hidden h-px flex-1 bg-slate-200 lg:block" />
      </div>

      <div className="mt-5 grid gap-3">
        {rows.map((row) => (
          <ActivityRowCard key={row.title} row={row} />
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-slate-900/10 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
        This page updates automatically every few seconds. You can keep it open
        while Marrai builds your report.
      </div>
    </section>
  );
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

function InProgressCard({ status }: { status: keyof typeof statusCopy }) {
  const content = getStatusContent(status);

  return (
    <div className="w-full max-w-3xl rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(247,249,244,0.98)_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-900/10">
            AUDIT STATUS
          </div>
          <h1 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            {content.subtitle}
          </p>
        </div>

        <div
          className={cn(
            "flex items-center gap-2 rounded-full px-4 py-2 text-sm ring-1",
            content.pillClass,
          )}
        >
          <span className={cn("h-2.5 w-2.5 rounded-full", content.dotClass)} />
          {auditStatusMessages[status]}
        </div>
      </div>

      <div className="mt-8">
        <AuditProgressSteps activeStatus={status} />
      </div>

      <div className="mt-8">
        <ActivityPanel status={status} />
      </div>
    </div>
  );
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
    return <InProgressCard status="pending" />;
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

  if (data.status === "failure") {
    return (
      <AuditErrorState
        title="The audit could not be completed"
        message={
          data.error_message ?? "Something went wrong while processing the audit."
        }
      />
    );
  }

  if (data.status === "success") {
    if (data.result) {
      return <ReportShell report={data.result} status={data.status} />;
    }

    return (
      <AuditErrorState
        title="The report could not be loaded"
        message="The audit finished, but the report data is missing."
      />
    );
  }

  return <InProgressCard status={data.status} />;
}
