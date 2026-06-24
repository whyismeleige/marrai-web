"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";

import {
  auditProxyErrorSchema,
  auditProxyResponseSchema,
  auditFormSchema,
  type AuditFormValues,
} from "@/features/audit/hooks";
import { cn } from "@/lib/utils";

type FieldErrorProps = {
  message?: string;
};

function FieldError({ message }: FieldErrorProps) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm text-rose-600">{message}</p>;
}

const auditFormResolver = (
  zodResolver as unknown as (schema: typeof auditFormSchema) => Resolver<AuditFormValues>
)(auditFormSchema);

export function AuditForm() {
  const router = useRouter();
  const [rootError, setRootError] = useState<string | null>(null);

  const form = useForm<AuditFormValues>({
    resolver: auditFormResolver,
    defaultValues: {
      url: "",
      email: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setRootError(null);

    const response = await fetch("/api/audit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).catch(() => null);

    if (!response) {
      setRootError("We could not reach the audit service. Try again shortly.");
      return;
    }

    const payload = await response.json().catch(() => null);
    const parsed = auditProxyResponseSchema.safeParse(payload);

    if (!response.ok || !parsed.success || !parsed.data.ok) {
      const error = auditProxyErrorSchema.safeParse(
        parsed.success ? parsed.data : payload,
      );

      if (
        response.status === 429 ||
        (error.success && error.data.code === "RATE_LIMITED")
      ) {
        setRootError("Too many requests right now. Please try again shortly.");
        return;
      }

      if (error.success) {
        setRootError(error.data.message);
        return;
      }

      setRootError("We could not start the audit. Please try again.");
      return;
    }

    router.replace(`/audit/${parsed.data.data.job_id}`);
  });

  return (
    <div className="w-full max-w-2xl">
      <div className="rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(247,249,244,0.98)_100%)] p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-7 lg:p-8">
        <div className="max-w-xl">
          <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-900/10">
            FREE AI VISIBILITY AUDIT
          </div>
          <h1 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Run your free AI visibility audit.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Enter your website and Marrai will crawl up to 20 pages to check
            metadata, schema, content quality, connectivity, technical
            compliance, and semantic clarity.
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="audit-url"
              className="text-sm font-medium text-slate-900"
            >
              Website URL
            </label>
            <input
              id="audit-url"
              type="url"
              inputMode="url"
              autoComplete="url"
              placeholder="https://example.com"
              className={cn(
                "mt-2 w-full rounded-2xl border bg-white/85 px-4 py-3.5 text-base text-slate-950 shadow-sm outline-none transition",
                "placeholder:text-slate-500 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10",
                form.formState.errors.url
                  ? "border-rose-300"
                  : "border-slate-900/10",
              )}
              {...form.register("url")}
              aria-invalid={form.formState.errors.url ? "true" : "false"}
            />
            <FieldError message={form.formState.errors.url?.message} />
          </div>

          <div>
            <label
              htmlFor="audit-email"
              className="text-sm font-medium text-slate-900"
            >
              Email address
            </label>
            <input
              id="audit-email"
              type="email"
              autoComplete="email"
              placeholder="name@company.com"
              className={cn(
                "mt-2 w-full rounded-2xl border bg-white/85 px-4 py-3.5 text-base text-slate-950 shadow-sm outline-none transition",
                "placeholder:text-slate-500 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10",
                form.formState.errors.email
                  ? "border-rose-300"
                  : "border-slate-900/10",
              )}
              {...form.register("email")}
              aria-invalid={form.formState.errors.email ? "true" : "false"}
            />
            <p className="mt-2 text-sm text-slate-500">
              Optional, if you want the report link emailed to you.
            </p>
            <FieldError message={form.formState.errors.email?.message} />
          </div>

          <div
            className={cn(
              "rounded-2xl border px-4 py-3 text-sm",
              rootError
                ? "border-rose-200 bg-rose-50 text-rose-700"
                : "border-slate-900/10 bg-white/65 text-slate-600",
            )}
            aria-live="polite"
          >
            {rootError ?? (
              <div className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#4C9A6A]" />
                <span>
                  Most audits complete in under a minute. You can leave your
                  email to receive the report link.
                </span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className={cn(
              "inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-all",
              "hover:bg-slate-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70",
            )}
          >
            {form.formState.isSubmitting ? "Starting..." : "Start audit"}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
