import { createClient, type SanityClient } from "next-sanity";

import { assertSanityEnv } from "@/sanity/config/env";

let cachedClient: SanityClient | null = null;

export function getSanityClient() {
  if (cachedClient) {
    return cachedClient;
  }

  const env = assertSanityEnv();

  cachedClient = createClient({
    projectId: env.projectId,
    dataset: env.dataset,
    apiVersion: env.apiVersion,
    useCdn: true,
    stega: false,
  });

  return cachedClient;
}
