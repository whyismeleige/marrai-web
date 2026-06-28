const DEFAULT_SANITY_DATASET = "production";
const DEFAULT_SANITY_API_VERSION = "2026-01-01";
const DEFAULT_SANITY_STUDIO_URL = "/studio";

export type SanityEnv = {
  projectId?: string;
  dataset: string;
  apiVersion: string;
  studioUrl: string;
};

export function getSanityEnv(): SanityEnv {
  return {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:
      process.env.NEXT_PUBLIC_SANITY_DATASET ?? DEFAULT_SANITY_DATASET,
    apiVersion:
      process.env.NEXT_PUBLIC_SANITY_API_VERSION ??
      DEFAULT_SANITY_API_VERSION,
    studioUrl:
      process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ??
      DEFAULT_SANITY_STUDIO_URL,
  };
}

export const sanityEnv = getSanityEnv();

export function hasSanityConfig() {
  return Boolean(sanityEnv.projectId && sanityEnv.dataset);
}

export function assertSanityEnv() {
  if (!sanityEnv.projectId) {
    throw new Error(
      "Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID to enable Sanity-powered routes.",
    );
  }

  return {
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
    apiVersion: sanityEnv.apiVersion,
    studioUrl: sanityEnv.studioUrl,
  };
}
