"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { normalizeAuditUrl } from "@/features/audit/url";
import { cn } from "@/lib/utils";

type AuditInputPillProps = {
  className?: string;
};

export function AuditInputPill({ className }: AuditInputPillProps) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedUrl = normalizeAuditUrl(value);

    if (!normalizedUrl) {
      setError("Enter a valid website URL.");
      return;
    }

    setError(null);
    router.push(`/audit?url=${encodeURIComponent(normalizedUrl)}`);
  };

  return (
    <form
      className={cn(
        "animate-fade-up mt-6 w-full max-w-2xl sm:mt-7",
        className,
      )}
      onSubmit={onSubmit}
    >
      <label htmlFor="website-url" className="sr-only">
        Enter your website URL
      </label>
      <div className="flex items-center gap-3 rounded-full bg-white/75 pl-5 pr-1.5 py-1.5 shadow-[0_20px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/10 backdrop-blur-md">
        <input
          id="website-url"
          name="url"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="Enter your website URL"
          aria-label="Website URL"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? "website-url-error" : undefined}
          className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-950 outline-none placeholder:text-slate-500 sm:text-base"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            if (error) {
              setError(null);
            }
          }}
        />
        <button
          type="submit"
          aria-label="Run free audit"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition-transform hover:scale-105 active:scale-95 sm:h-11 sm:w-11"
        >
          <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
        </button>
      </div>
      <div className="min-h-5 px-5">
        {error ? (
          <p
            id="website-url-error"
            className="pt-2 text-left text-xs text-rose-600"
          >
            {error}
          </p>
        ) : null}
      </div>
      <p className="mt-3 text-sm text-slate-600">
        Crawl up to 20 pages. Get metadata, schema, content, and semantic
        clarity scores.
      </p>
    </form>
  );
}
