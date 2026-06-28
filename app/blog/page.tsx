import type { Metadata } from "next";
import Link from "next/link";

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

function BlogCard({ post, featured = false }: { post: BlogPostListItem; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full rounded-[1.75rem] border border-slate-900/10 bg-white/78 p-5 shadow-[0_14px_38px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4C9A6A]/25 hover:shadow-[0_22px_54px_rgba(15,23,42,0.08)]"
    >
      <div className="flex flex-wrap gap-2">
        {post.categories?.slice(0, 2).map((category) => (
          <span
            key={category.slug}
            className="rounded-full bg-[#4C9A6A]/10 px-3 py-1 text-[11px] font-medium text-[#326548] ring-1 ring-[#4C9A6A]/15"
          >
            {category.title}
          </span>
        ))}
      </div>
      <h2
        className={
          featured
            ? "mt-5 text-3xl font-normal tracking-[-0.04em] text-slate-950 sm:text-4xl"
            : "mt-5 text-xl font-medium tracking-[-0.03em] text-slate-950"
        }
      >
        {post.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
        {post.excerpt}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
        {post.author?.name ? <span>{post.author.name}</span> : null}
        {post.publishedAt ? (
          <time dateTime={post.publishedAt}>
            {new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }).format(new Date(post.publishedAt))}
          </time>
        ) : null}
        {post.readingTime ? <span>{post.readingTime} min read</span> : null}
      </div>
    </Link>
  );
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

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-white/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 ring-1 ring-slate-900/10 backdrop-blur-sm">
              Research
            </div>
            <h1 className="mt-5 text-5xl font-normal leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Research for the layer after SEO.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Notes on AI visibility, answer-engine discovery, structured data,
              and citation readiness.
            </p>
          </div>
        </section>

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
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </section>
        ) : (
          <EmptyState configured={isConfigured} />
        )}
      </div>
    </main>
  );
}
