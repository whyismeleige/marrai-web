export function normalizeAuditUrl(input: string): string | null {
  const trimmed = input.trim();

  if (!trimmed) {
    return null;
  }

  const candidate = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const parsed = new URL(candidate);
    const pathname = parsed.pathname.replace(/\/+$/, "");

    return `${parsed.origin}${pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return null;
  }
}
