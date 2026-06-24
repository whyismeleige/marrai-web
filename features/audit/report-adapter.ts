import type { AuditReportResult } from "./schemas";

export type ReportCategoryScore = {
  key:
    | "metadata"
    | "content_quality"
    | "structured_data"
    | "connectivity"
    | "technical_compliance"
    | "semantic_alignment";
  label: string;
  score: number | null;
  description: string;
};

export type MergedPageBreakdown = {
  url: string;
  page?: AuditReportResult["pages"][number];
  semanticPage?: AuditReportResult["semantic_pages"][number];
  overallScore: number | null;
  semanticScore: number | null;
};

export function normalizeUrl(url: string): string {
  const trimmed = url.trim();

  if (!trimmed) {
    return "";
  }

  try {
    const parsed = new URL(trimmed);
    const pathname = parsed.pathname.replace(/\/+$/, "");
    return `${parsed.origin}${pathname || "/"}`;
  } catch {
    return trimmed.replace(/\/+$/, "");
  }
}

export function averageScores(scores: Array<number | null | undefined>): number | null {
  const validScores = scores.filter(
    (score): score is number => typeof score === "number" && Number.isFinite(score),
  );

  if (validScores.length === 0) {
    return null;
  }

  const total = validScores.reduce((sum, score) => sum + score, 0);
  return Math.round(total / validScores.length);
}

export function clampScore(score: number | null | undefined): number | null {
  if (typeof score !== "number" || !Number.isFinite(score)) {
    return null;
  }

  return Math.max(0, Math.min(100, score));
}

function getCategoryScoresFromPages(
  pages: AuditReportResult["pages"],
  key: "metadata" | "content_quality" | "structured_data" | "connectivity" | "technical_compliance",
) {
  return averageScores(pages.map((page) => page[key]?.score));
}

function getPageOverallScore(page: AuditReportResult["pages"][number]) {
  if (typeof page.overall_score === "number" && Number.isFinite(page.overall_score)) {
    return Math.round(page.overall_score);
  }

  return averageScores([
    page.metadata?.score,
    page.content_quality?.score,
    page.structured_data?.score,
    page.connectivity?.score,
    page.technical_compliance?.score,
  ]);
}

function getSemanticPageScore(page: AuditReportResult["semantic_pages"][number]) {
  if (typeof page.overall_score === "number" && Number.isFinite(page.overall_score)) {
    return Math.round(page.overall_score);
  }

  return null;
}

function getPageKey(url: string, fallback: string) {
  const normalized = normalizeUrl(url);
  return normalized || fallback;
}

export function getSiteCategoryScores(
  result: AuditReportResult,
): ReportCategoryScore[] {
  return [
    {
      key: "metadata",
      label: "Metadata",
      score: getCategoryScoresFromPages(result.pages, "metadata"),
      description: "Titles, descriptions, canonicals, and robots signals.",
    },
    {
      key: "content_quality",
      label: "Content Quality",
      score: getCategoryScoresFromPages(result.pages, "content_quality"),
      description: "Word count, headings, and body text diversity.",
    },
    {
      key: "structured_data",
      label: "Structured Data",
      score: getCategoryScoresFromPages(result.pages, "structured_data"),
      description: "Schema presence, schema types, and FAQ coverage.",
    },
    {
      key: "connectivity",
      label: "Connectivity",
      score: getCategoryScoresFromPages(result.pages, "connectivity"),
      description: "Internal links and crawlable site structure.",
    },
    {
      key: "technical_compliance",
      label: "Technical Compliance",
      score: getCategoryScoresFromPages(result.pages, "technical_compliance"),
      description: "Image alt text and basic machine-readable hygiene.",
    },
    {
      key: "semantic_alignment",
      label: "Semantic Alignment",
      score:
        typeof result.semantic_score === "number" &&
        Number.isFinite(result.semantic_score)
          ? Math.round(result.semantic_score)
          : null,
      description: "Heading-to-section semantic coherence.",
    },
  ];
}

export function getMergedPageBreakdown(
  result: AuditReportResult,
): MergedPageBreakdown[] {
  const merged = new Map<string, MergedPageBreakdown>();

  result.pages.forEach((page, index) => {
    const key = getPageKey(page.url ?? "", `page-${index}`);
    const existing = merged.get(key) ?? {
      url: page.url ?? `Page ${index + 1}`,
      page: undefined,
      semanticPage: undefined,
      overallScore: null,
      semanticScore: null,
    };

    existing.url = page.url ?? existing.url;
    existing.page = page;
    existing.overallScore = getPageOverallScore(page);
    merged.set(key, existing);
  });

  result.semantic_pages.forEach((semanticPage, index) => {
    const key = getPageKey(
      semanticPage.url ?? "",
      `semantic-${index}`,
    );
    const existing = merged.get(key) ?? {
      url: semanticPage.url ?? `Semantic page ${index + 1}`,
      page: undefined,
      semanticPage: undefined,
      overallScore: null,
      semanticScore: null,
    };

    existing.url = semanticPage.url ?? existing.url;
    existing.semanticPage = semanticPage;
    existing.semanticScore = getSemanticPageScore(semanticPage);
    merged.set(key, existing);
  });

  return [...merged.values()].sort((a, b) =>
    a.url.localeCompare(b.url, undefined, { numeric: true, sensitivity: "base" }),
  );
}
