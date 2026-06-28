import { hasSanityConfig } from "@/sanity/config/env";
import { getSanityClient } from "@/sanity/lib/client";
import { getCanonicalUrl, getSiteUrl } from "@/sanity/lib/metadata";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import type { BlogPostListItem } from "@/sanity/lib/types";

export const revalidate = 3600;

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return new Response("NEXT_PUBLIC_SITE_URL is required for RSS.", {
      status: 503,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  const posts = hasSanityConfig()
    ? await getSanityClient().fetch<BlogPostListItem[]>(POSTS_QUERY)
    : [];

  const items = posts
    .map((post) => {
      const url = getCanonicalUrl(`/blog/${post.slug}`);

      if (!url) {
        return "";
      }

      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${escapeXml(url)}</link>
          <guid>${escapeXml(url)}</guid>
          <description>${escapeXml(post.excerpt)}</description>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>
      `;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Marrai Research</title>
        <link>${escapeXml(new URL("/blog", siteUrl).toString())}</link>
        <description>Research notes on AI visibility, answer-engine discovery, structured data, and citation readiness.</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
