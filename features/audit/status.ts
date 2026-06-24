import { z } from "zod";

export const auditStatusValues = [
  "pending",
  "started",
  "crawling",
  "scoring",
  "success",
  "failure",
] as const;

export const auditStatusSchema = z.enum(auditStatusValues);

export type AuditStatus = z.infer<typeof auditStatusSchema>;
