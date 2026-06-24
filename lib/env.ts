import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
server: {},

client: {
  NEXT_PUBLIC_SITE_URL: z.url(),
  NEXT_PUBLIC_API_BASE_URL: z.url(),
},

runtimeEnv: {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
},
});
