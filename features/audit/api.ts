import { env } from "@/lib/env";

import {
  auditApiErrorSchema,
  auditPollResponseSchema,
  auditSubmitRequestSchema,
  auditSubmitResponseSchema,
  type AuditPollResponse,
  type AuditSubmitRequest,
  type AuditSubmitResponse,
} from "./schemas";

export type ProxyApiErrorCode =
  | "RATE_LIMITED"
  | "VALIDATION_ERROR"
  | "BACKEND_ERROR"
  | "NETWORK_ERROR"
  | "NOT_FOUND";

export type ProxyApiError = {
  ok: false;
  code: ProxyApiErrorCode;
  message: string;
};

export type ProxyApiSuccess<T> = {
  ok: true;
  data: T;
};

export const auditApiBaseUrl =
  env.API_BASE_URL ?? env.NEXT_PUBLIC_API_BASE_URL;

export function getBackendAuditUrl(pathname: string) {
  return new URL(pathname, auditApiBaseUrl);
}

export function normalizeAuditSubmitRequest(
  input: unknown,
): AuditSubmitRequest {
  return auditSubmitRequestSchema.parse(input);
}

export function normalizeAuditSubmitResponse(
  input: unknown,
): AuditSubmitResponse {
  return auditSubmitResponseSchema.parse(input);
}

export function normalizeAuditPollResponse(input: unknown): AuditPollResponse {
  return auditPollResponseSchema.parse(input);
}

export function buildProxyError(
  code: ProxyApiErrorCode,
  message: string,
): ProxyApiError {
  return { ok: false, code, message };
}

export function buildProxySuccess<T>(data: T): ProxyApiSuccess<T> {
  return { ok: true, data };
}

export function extractBackendMessage(payload: unknown, fallback: string) {
  const parsed = auditApiErrorSchema.safeParse(payload);

  if (!parsed.success) {
    return fallback;
  }

  const { detail } = parsed.data;

  if (typeof detail === "string") {
    return detail;
  }

  if (Array.isArray(detail)) {
    return detail
      .map((item) => {
        if (typeof item === "string") {
          return item;
        }

        if (item && typeof item === "object") {
          const maybeMessage = (item as Record<string, unknown>).message;
          if (typeof maybeMessage === "string") {
            return maybeMessage;
          }
        }

        return null;
      })
      .filter(Boolean)
      .join(", ") || fallback;
  }

  if (detail && typeof detail === "object") {
    const maybeMessage = (detail as Record<string, unknown>).message;
    if (typeof maybeMessage === "string") {
      return maybeMessage;
    }
  }

  return fallback;
}
