import { NextResponse } from "next/server";
import { z } from "zod";

import {
  buildProxyError,
  buildProxySuccess,
  extractBackendMessage,
  getBackendAuditUrl,
  normalizeAuditPollResponse,
} from "@/features/audit/api";

const jobIdSchema = z.string().uuid();

async function readResponseBody(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return await response.text().catch(() => "");
  }

  return await response.json().catch(() => null);
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ jobId: string }> },
) {
  const { jobId } = await params;
  const parsedJobId = jobIdSchema.safeParse(jobId);

  if (!parsedJobId.success) {
    return NextResponse.json(
      buildProxyError("VALIDATION_ERROR", "A valid job ID is required."),
      { status: 400 },
    );
  }

  let backendResponse: Response;

  try {
    backendResponse = await fetch(
      getBackendAuditUrl(`/api/v1/audit/${encodeURIComponent(parsedJobId.data)}`),
      {
        method: "GET",
        cache: "no-store",
      },
    );
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

  if (backendResponse.status === 404) {
    return NextResponse.json(
      buildProxyError("NOT_FOUND", "That audit job could not be found."),
      { status: 404 },
    );
  }

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
          "The backend rejected the audit job request.",
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
    const data = normalizeAuditPollResponse(backendBody);
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
