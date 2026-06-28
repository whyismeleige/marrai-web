import type { MetadataRoute } from "next";

import { hasSanityConfig } from "@/sanity/config/env";
import { client } from "@/sanity/lib/client";
import { getSiteUrl } from "@/sanity/lib/metadata";
import {
  CATEGORIES_QUERY,
  POSTS_QUERY,
} from "@/sanity/lib/queries";
import type { BlogCategory, BlogPostListItem } from "@/sanity/lib/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return [];
  }

  const staticRoutes: MetadataRoute.Sitemap = ["/", "/audit", "/blog"].map(
    (path) => ({
      url: new URL(path, siteUrl).toString(),
      lastModified: new Date(),
    }),
  );

  if (!hasSanityConfig()) {
    return staticRoutes;
  }

  const [posts, categories] = await Promise.all([
    client.fetch<BlogPostListItem[]>(POSTS_QUERY),
    client.fetch<BlogCategory[]>(CATEGORIES_QUERY),
  ]);

  return [
    ...staticRoutes,
    ...posts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
    })),
    ...categories.map((category) => ({
      url: new URL(`/blog/category/${category.slug}`, siteUrl).toString(),
      lastModified: new Date(),
    })),
  ];
}
