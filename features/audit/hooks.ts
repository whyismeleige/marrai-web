import { z } from "zod";

import { auditSubmitResponseSchema } from "./schemas";

const emailSchema = z.preprocess((value) => {
  if (typeof value !== "string") {
    return value;
  }

  return value.trim();
}, z.string().min(1, "Enter your email address.").email("Enter a valid email address."));

export const auditFormSchema = z.object({
  url: z
    .string()
    .trim()
    .min(1, "Enter a website URL.")
    .url("Enter a valid website URL."),
  email: emailSchema,
});

export const auditProxySuccessSchema = z.object({
  ok: z.literal(true),
  data: auditSubmitResponseSchema,
});

export const auditProxyErrorSchema = z.object({
  ok: z.literal(false),
  code: z.enum([
    "RATE_LIMITED",
    "VALIDATION_ERROR",
    "BACKEND_ERROR",
    "NETWORK_ERROR",
    "NOT_FOUND",
  ]),
  message: z.string().min(1),
});

export const auditProxyResponseSchema = z.union([
  auditProxySuccessSchema,
  auditProxyErrorSchema,
]);

export const auditJobIdSchema = z.string().uuid("Enter a valid job ID.");

export type AuditFormValues = z.infer<typeof auditFormSchema>;
export type AuditProxyResponse = z.infer<typeof auditProxyResponseSchema>;

export const auditStatusMessages = {
  pending: "Preparing your audit",
  started: "Starting crawler",
  crawling: "Crawling your website",
  scoring: "Scoring AI visibility",
  success: "Your report is ready",
  failure: "The audit could not be completed",
} as const;

export const auditProgressSteps = [
  {
    id: "submitted",
    label: "Submitted",
    statuses: ["pending", "started"] as const,
  },
  {
    id: "crawling",
    label: "Crawling",
    statuses: ["crawling"] as const,
  },
  {
    id: "scoring",
    label: "Scoring",
    statuses: ["scoring"] as const,
  },
  {
    id: "ready",
    label: "Report ready",
    statuses: ["success", "failure"] as const,
  },
] as const;
