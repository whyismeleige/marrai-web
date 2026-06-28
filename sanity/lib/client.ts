import { createClient } from "next-sanity";

import { sanityEnv } from "@/sanity/config/env";

export const client = createClient({
  projectId: sanityEnv.projectId ?? "",
  dataset: sanityEnv.dataset,
  apiVersion: sanityEnv.apiVersion,
  useCdn: true,
  stega: false,
});
