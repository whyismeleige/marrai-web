import { NextResponse } from "next/server";

import {
  buildProxyError,
  buildProxySuccess,
  extractBackendMessage,
  getBackendAuditUrl,
  normalizeAuditSubmitRequest,
  normalizeAuditSubmitResponse,
} from "@/features/audit/api";

async function readJsonBody(request: Request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

async function readResponseBody(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return await response.text().catch(() => "");
  }

  return await response.json().catch(() => null);
}

export async function POST(request: Request) {
  const body = await readJsonBody(request);

  if (body === null) {
    return NextResponse.json(
      buildProxyError("VALIDATION_ERROR", "Request body must be valid JSON."),
      { status: 400 },
    );
  }

  let payload;

  try {
    payload = normalizeAuditSubmitRequest(body);
  } catch {
    return NextResponse.json(
      buildProxyError(
        "VALIDATION_ERROR",
        "Enter a valid website URL to start the audit.",
      ),
      { status: 400 },
    );
  }

  let backendResponse: Response;

  try {
    backendResponse = await fetch(getBackendAuditUrl("/api/v1/audit"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } catch {
    return NextResponse.json(
      buildProxyError(
        "NETWORK_ERROR",
        "Marrai could not reach the audit service. Try again shortly.",
      ),
      { status: 503 },
    );
  }

  const backendBody = await readResponseBody(backendResponse);

  if (backendResponse.status === 429) {
    return NextResponse.json(
      buildProxyError(
        "RATE_LIMITED",
        "Too many audit requests. Please try again in a moment.",
      ),
      { status: 429 },
    );
  }

  if (backendResponse.status === 422) {
    return NextResponse.json(
      buildProxyError(
        "VALIDATION_ERROR",
        extractBackendMessage(
          backendBody,
          "The backend rejected the audit request.",
        ),
      ),
      { status: 422 },
    );
  }

  if (!backendResponse.ok) {
    return NextResponse.json(
      buildProxyError(
        "BACKEND_ERROR",
        extractBackendMessage(
          backendBody,
          "The audit service returned an unexpected response.",
        ),
      ),
      { status: 502 },
    );
  }

  try {
    const data = normalizeAuditSubmitResponse(backendBody);
    return NextResponse.json(buildProxySuccess(data));
  } catch {
    return NextResponse.json(
      buildProxyError(
        "BACKEND_ERROR",
        "The audit service returned malformed data.",
      ),
      { status: 502 },
    );
  }
}
