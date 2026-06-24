import { AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";

type AuditErrorStateProps = {
  title: string;
  message: string;
};

export function AuditErrorState({ title, message }: AuditErrorStateProps) {
  return (
    <div className="w-full max-w-2xl rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(247,249,244,0.98)_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
        <AlertTriangle className="h-5 w-5" />
      </div>
      <h1 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-7 text-slate-600">{message}</p>
      <div className="mt-8">
        <Link
          href="/audit"
          className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to audit
        </Link>
      </div>
    </div>
  );
}
