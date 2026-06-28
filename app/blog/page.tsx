import type { Metadata } from "next";
import Link from "next/link";

import { BlogCard } from "@/components/blog/blog-card";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogHeader } from "@/components/blog/blog-header";
import { hasSanityConfig } from "@/sanity/config/env";
import { client } from "@/sanity/lib/client";
import {
  CATEGORIES_QUERY,
  FEATURED_POSTS_QUERY,
  POSTS_QUERY,
} from "@/sanity/lib/queries";
import type { BlogCategory, BlogPostListItem } from "@/sanity/lib/types";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Research — Marrai",
  description:
    "Research notes on AI visibility, answer-engine discovery, structured data, and citation readiness.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Research — Marrai",
    description:
      "Research notes on AI visibility, answer-engine discovery, structured data, and citation readiness.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research — Marrai",
    description:
      "Research notes on AI visibility, answer-engine discovery, structured data, and citation readiness.",
  },
};

async function getBlogIndexData() {
  if (!hasSanityConfig()) {
    return {
      posts: [] as BlogPostListItem[],
      featuredPosts: [] as BlogPostListItem[],
      categories: [] as BlogCategory[],
      isConfigured: false,
    };
  }

  const [posts, featuredPosts, categories] = await Promise.all([
    client.fetch<BlogPostListItem[]>(POSTS_QUERY),
    client.fetch<BlogPostListItem[]>(FEATURED_POSTS_QUERY),
    client.fetch<BlogCategory[]>(CATEGORIES_QUERY),
  ]);

  return {
    posts,
    featuredPosts,
    categories,
    isConfigured: true,
  };
}

function EmptyState({ configured }: { configured: boolean }) {
  return (
    <div className="rounded-[2rem] border border-slate-900/10 bg-white/72 p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.04)] backdrop-blur-sm">
      <h2 className="text-2xl font-normal tracking-[-0.035em] text-slate-950">
        No research notes published yet.
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
        {configured
          ? "Published Sanity posts will appear here automatically."
          : "Sanity is not configured for this environment yet. Add the Sanity project variables to enable research content."}
      </p>
    </div>
  );
}

export default async function BlogPage() {
  const { posts, featuredPosts, categories, isConfigured } =
    await getBlogIndexData();
  const primaryFeaturedPost = featuredPosts[0];
  const remainingPosts = primaryFeaturedPost
    ? posts.filter((post) => post._id !== primaryFeaturedPost._id)
    : posts;

  return (
    <main className="min-h-[100svh] bg-[linear-gradient(180deg,#CFEAF8_0%,#EEF5F1_42%,#E7EFE4_100%)] text-[#101828]">
      <div className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-medium text-slate-700">
            Marrai
          </Link>
          <Link
            href="/audit"
            className="rounded-full bg-slate-950 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-slate-800"
          >
            Free audit
          </Link>
        </nav>

        <BlogHeader
          eyebrow="Research"
          title="Research for the layer after SEO."
          description="Notes on AI visibility, answer-engine discovery, structured data, and citation readiness."
        />

        {categories.length ? (
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="rounded-full bg-white/62 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 backdrop-blur-sm transition-colors hover:bg-white"
              >
                {category.title}
              </Link>
            ))}
          </div>
        ) : null}

        {primaryFeaturedPost ? (
          <section className="mb-8">
            <BlogCard post={primaryFeaturedPost} featured />
          </section>
        ) : null}

        {posts.length ? (
          <BlogGrid posts={remainingPosts} />
        ) : (
          <EmptyState configured={isConfigured} />
        )}
      </div>
    </main>
  );
}
