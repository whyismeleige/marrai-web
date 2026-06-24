import { z } from "zod";

import { auditStatusSchema } from "./status";

const flexibleRecordSchema = z.record(z.string(), z.unknown());

const flexibleArraySchema = z.array(z.unknown());

const flexibleDateTimeSchema = z.string().min(1);

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
  findings: flexibleArraySchema,
  recommendations: flexibleArraySchema,
  semantic_findings: flexibleArraySchema,
  semantic_recommendations: flexibleArraySchema,
  pages: flexibleArraySchema,
  semantic_pages: flexibleArraySchema,
  unreachable_pages: flexibleArraySchema,
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
