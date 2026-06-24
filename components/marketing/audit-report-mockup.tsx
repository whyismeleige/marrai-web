import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Monitor,
  PanelLeft,
  RotateCw,
  Share2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { MarraiLogo } from "./marrai-logo";
import { ScaledDashboard } from "./scaled-dashboard";

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="px-4 py-4">
      <div className="text-[9px] uppercase tracking-[0.18em] text-white/35">
        {label}
      </div>
      <div className="mt-2 text-2xl font-medium text-white">{value}</div>
    </div>
  );
}

function SignalCard({
  label,
  score,
  status,
  width,
}: {
  label: string;
  score: string;
  status: string;
  width: string;
}) {
  return (
    <div className="rounded-xl bg-white/[0.035] p-4 ring-1 ring-white/5">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-medium text-white">{label}</div>
        <div className="text-sm text-white/65">{score}</div>
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#4C9A6A]"
          style={{ width }}
        />
      </div>
      <div className="mt-3 text-xs text-white/50">{status}</div>
    </div>
  );
}

function PriorityPill({ children, amber }: { children: string; amber?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium",
        amber
          ? "bg-[#F2B84B]/15 text-[#F2B84B]"
          : "bg-white/5 text-white/65",
      )}
    >
      {children}
    </span>
  );
}

export function AuditReportMockup() {
  return (
    <ScaledDashboard className="animate-hero-rise">
      <section
        id="sample-report"
        className="overflow-hidden rounded-t-3xl bg-[#17181C] text-left text-white shadow-[0_-24px_100px_rgba(15,23,42,0.28)] ring-1 ring-white/10"
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/5 bg-[#202126] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <PanelLeft className="h-3.5 w-3.5 text-white/35" />
              <ChevronLeft className="h-3.5 w-3.5 text-white/35" />
              <ChevronRight className="h-3.5 w-3.5 text-white/35" />
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-md bg-[#17181C] px-6 py-1 text-[10px] text-white/60">
            <Monitor className="h-3.5 w-3.5 text-white/45" />
            <span>marrai.tech/audit</span>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <RotateCw className="h-3.5 w-3.5 text-white/35" />
            <Share2 className="h-3.5 w-3.5 text-white/35" />
            <Copy className="h-3.5 w-3.5 text-white/35" />
          </div>
        </div>

        <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="border-r border-white/5 bg-[#1E1F24] px-4 py-5 max-md:hidden">
            <div className="flex items-center gap-2 text-white">
              <MarraiLogo className="h-5 w-5" />
              <div>
                <div className="text-[13px] font-medium leading-none">
                  Acme AI audit
                </div>
                <div className="mt-1 text-[11px] text-white/45">
                  Visibility workspace
                </div>
              </div>
            </div>

            <nav className="mt-8 space-y-1.5 text-sm">
              {["Overview", "Signals", "Pages", "Recommendations"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={cn(
                      "rounded-lg px-3 py-2 text-white/55",
                      index === 0 && "bg-white/[0.06] text-white",
                    )}
                  >
                    {item}
                  </div>
                ),
              )}
            </nav>
          </aside>

          <div className="bg-[#17181C] p-4 sm:p-5 lg:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-white/65 uppercase">
                  AI visibility audit
                </span>
                <span className="text-sm text-white/55">acme.com</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1.5 text-sm text-white/75 ring-1 ring-white/5">
                <span className="h-2 w-2 rounded-full bg-[#4C9A6A]" />
                Completed
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/5 lg:grid-cols-4">
              <StatCard label="Overall Score" value="74" />
              <StatCard label="Semantic Clarity" value="81" />
              <StatCard label="Pages Crawled" value="20" />
              <StatCard label="Crawl Time" value="12.5s" />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              <SignalCard label="Metadata" score="86" status="Strong" width="86%" />
              <SignalCard
                label="Structured Data"
                score="48"
                status="Needs work"
                width="48%"
              />
              <SignalCard label="Content Quality" score="72" status="Good" width="72%" />
              <SignalCard label="Connectivity" score="79" status="Good" width="79%" />
              <SignalCard
                label="Technical Compliance"
                score="91"
                status="Strong"
                width="91%"
              />
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
              <div className="overflow-hidden rounded-2xl bg-white/[0.035] ring-1 ring-white/5">
                <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                  <div>
                    <div className="text-sm font-medium text-white">Findings</div>
                    <div className="mt-1 text-sm text-white/45">
                      Top issues blocking AI citation readiness
                    </div>
                  </div>
                </div>

                <div className="divide-y divide-white/5">
                  {[
                    [
                      "Structured Data",
                      "FAQ schema is missing on high-intent pages",
                      "High",
                    ],
                    [
                      "Content Quality",
                      "Headings explain topics but not answer-ready summaries",
                      "Medium",
                    ],
                    [
                      "Connectivity",
                      "Some service pages are weakly linked from authority pages",
                      "Medium",
                    ],
                  ].map(([signal, finding, priority]) => (
                    <div
                      key={`${signal}-${priority}`}
                      className="grid gap-3 px-5 py-4 md:grid-cols-[160px_minmax(0,1fr)_92px]"
                    >
                      <div className="text-sm font-medium text-white">{signal}</div>
                      <div className="text-sm leading-6 text-white/65">{finding}</div>
                      <div className="flex md:justify-end">
                        <PriorityPill amber={priority === "High"}>
                          {priority}
                        </PriorityPill>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#202126] p-5">
                <div className="space-y-3">
                  <div className="inline-flex rounded-full bg-[#4C9A6A]/12 px-3 py-1 text-[11px] font-medium text-[#A7D7B5]">
                    Recommendation
                  </div>
                  <p className="text-base leading-7 text-white/80">
                    Add structured FAQ blocks and strengthen summary sections on
                    pages most likely to be cited by AI answer engines.
                  </p>
                </div>

                <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                    Next step
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/72">
                    Prioritize your top authority pages first, then expand the
                    schema and summary pattern across the rest of the site.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScaledDashboard>
  );
}
