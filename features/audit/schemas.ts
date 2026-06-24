import { z } from "zod";

import { auditStatusSchema } from "./status";

const flexibleRecordSchema = z.record(z.string(), z.unknown());

const flexibleArraySchema = z.array(z.unknown());

const flexibleDateTimeSchema = z.string().min(1);

const auditMetricsSchema = z.record(z.string(), z.number().finite()).catch({});

const auditCategorySchema = z
  .object({
    score: z.number().finite().optional(),
    max_possible: z.number().finite().optional(),
    metrics: auditMetricsSchema,
    findings: z.array(z.unknown()).catch([]),
    recommendations: z.array(z.unknown()).catch([]),
  })
  .passthrough();

const auditPageSchema = z
  .object({
    url: z.string().optional(),
    overall_score: z.number().finite().optional(),
    semantic_score: z.number().finite().optional(),
    metadata: auditCategorySchema.optional(),
    content_quality: auditCategorySchema.optional(),
    structured_data: auditCategorySchema.optional(),
    connectivity: auditCategorySchema.optional(),
    technical_compliance: auditCategorySchema.optional(),
  })
  .passthrough();

const auditSemanticSectionScoreSchema = z
  .object({
    heading: z.string().optional(),
    section_position: z.number().finite().optional(),
    alignment_score: z.number().finite().optional(),
    finding: z.unknown().optional(),
    recommendation: z.unknown().optional(),
  })
  .passthrough();

const auditSemanticPageSchema = z
  .object({
    url: z.string().optional(),
    overall_score: z.number().finite().optional(),
    section_scores: z.array(auditSemanticSectionScoreSchema).catch([]),
    finding: z.unknown().optional(),
    recommendation: z.unknown().optional(),
  })
  .passthrough();

export const auditSubmitRequestSchema = z.object({
  url: z.string().url(),
  email: z.string().email(),
});

export const auditSubmitResponseSchema = z.object({
  job_id: z.string().min(1),
  status: auditStatusSchema,
});

export const auditReportResultSchema = z.object({
  url: z.string().url(),
  pages_crawled: z.number().int().nonnegative(),
  overall_score: z.number().finite(),
  semantic_score: z.number().finite(),
  findings: flexibleArraySchema.catch([]),
  recommendations: flexibleArraySchema.catch([]),
  semantic_findings: flexibleArraySchema.catch([]),
  semantic_recommendations: flexibleArraySchema.catch([]),
  pages: z.array(auditPageSchema).catch([]),
  semantic_pages: z.array(auditSemanticPageSchema).catch([]),
  unreachable_pages: flexibleArraySchema.catch([]),
  crawl_duration_seconds: z.number().nonnegative(),
  created_at: flexibleDateTimeSchema,
}).passthrough();

export const auditPollResponseSchema = z
  .object({
    job_id: z.string().min(1),
    url: z.string().url(),
    status: auditStatusSchema,
    result: auditReportResultSchema.nullish(),
    error_message: z.string().nullish(),
    created_at: flexibleDateTimeSchema,
    updated_at: flexibleDateTimeSchema,
    completed_at: flexibleDateTimeSchema.nullish(),
  })
  .passthrough();

export const auditApiErrorSchema = z
  .object({
    detail: z.union([z.string(), flexibleRecordSchema, flexibleArraySchema]),
  })
  .passthrough();

export type AuditSubmitRequest = z.infer<typeof auditSubmitRequestSchema>;
export type AuditSubmitResponse = z.infer<typeof auditSubmitResponseSchema>;
export type AuditReportResult = z.infer<typeof auditReportResultSchema>;
export type AuditPollResponse = z.infer<typeof auditPollResponseSchema>;
