import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { sanityEnv } from "@/sanity/config/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Marrai Studio",
  projectId: sanityEnv.projectId ?? "",
  dataset: sanityEnv.dataset,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
