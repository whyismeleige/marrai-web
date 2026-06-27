"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { normalizeAuditUrl } from "@/features/audit/url";
import { cn } from "@/lib/utils";

type AuditInputPillProps = {
  className?: string;
  controlClassName?: string;
  id?: string;
  helperText?: string | null;
  placeholder?: string;
  buttonLabel?: string;
};

export function AuditInputPill({
  className,
  controlClassName,
  id = "website-url",
  helperText = "Crawl up to 20 pages. Get metadata, schema, content, and semantic clarity scores.",
  placeholder = "Enter your website URL",
  buttonLabel,
}: AuditInputPillProps) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const errorId = `${id}-error`;

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
      <label htmlFor={id} className="sr-only">
        Enter your website URL
      </label>
      <div
        className={cn(
          "flex items-center gap-3 rounded-full bg-white/75 pl-5 pr-1.5 py-1.5 shadow-[0_20px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/10 backdrop-blur-md",
          controlClassName,
        )}
      >
        <input
          id={id}
          name="url"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder={placeholder}
          aria-label="Website URL"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
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
          aria-label={buttonLabel ?? "Run free audit"}
          className={cn(
            "inline-flex h-10 items-center justify-center rounded-full bg-slate-950 text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95 sm:h-11",
            buttonLabel ? "gap-2 px-4 sm:px-5" : "w-10 shrink-0 sm:w-11",
          )}
        >
          {buttonLabel ? (
            <span className="text-[13px] font-medium">{buttonLabel}</span>
          ) : null}
          <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
        </button>
      </div>
      <div className="min-h-5 px-5">
        {error ? (
          <p
            id={errorId}
            className="pt-2 text-left text-xs text-rose-600"
          >
            {error}
          </p>
        ) : null}
      </div>
      {helperText ? (
        <p className="mt-3 text-sm text-slate-600">{helperText}</p>
      ) : null}
    </form>
  );
}
