import { z } from "zod";

import { auditSubmitResponseSchema } from "./schemas";

const optionalEmailSchema = z.preprocess((value) => {
  if (typeof value !== "string") {
    return value;
  }

  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}, z.string().email("Enter a valid email address.").optional());

export const auditFormSchema = z.object({
  url: z
    .string()
    .trim()
    .min(1, "Enter a website URL.")
    .url("Enter a valid website URL."),
  email: optionalEmailSchema,
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

export type AuditFormValues = z.infer<typeof auditFormSchema>;
export type AuditProxyResponse = z.infer<typeof auditProxyResponseSchema>;
