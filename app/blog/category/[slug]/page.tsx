import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { hasSanityConfig } from "@/sanity/config/env";
import { client } from "@/sanity/lib/client";
import {
  CATEGORY_SLUGS_QUERY,
  POSTS_BY_CATEGORY_QUERY,
} from "@/sanity/lib/queries";
import type { BlogCategoryPage, BlogPostListItem } from "@/sanity/lib/types";

export const revalidate = 3600;

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

async function getCategoryPage(slug: string) {
  if (!hasSanityConfig()) {
    return null;
  }

  return client.fetch<BlogCategoryPage | null>(POSTS_BY_CATEGORY_QUERY, {
    slug,
  });
}

export async function generateStaticParams() {
  if (!hasSanityConfig()) {
    return [];
  }

  const slugs = await client.fetch<Array<{ slug: string }>>(
    CATEGORY_SLUGS_QUERY,
  );

  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryPage(slug);

  if (!category) {
    return {
      title: "Research — Marrai",
    };
  }

  return {
    title: `${category.title} Research — Marrai`,
    description:
      category.description ??
      `Research notes from Marrai about ${category.title}.`,
  };
}

function CategoryPostCard({ post }: { post: BlogPostListItem }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-[1.75rem] border border-slate-900/10 bg-white/78 p-5 shadow-[0_14px_38px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4C9A6A]/25 hover:shadow-[0_22px_54px_rgba(15,23,42,0.08)]"
    >
      <h2 className="text-xl font-medium tracking-[-0.03em] text-slate-950">
        {post.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
      <div className="mt-5 text-xs text-slate-500">
        <time dateTime={post.publishedAt}>
          {new Intl.DateTimeFormat("en", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }).format(new Date(post.publishedAt))}
        </time>
      </div>
    </Link>
  );
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryPage(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-[100svh] bg-[linear-gradient(180deg,#CFEAF8_0%,#EEF5F1_42%,#E7EFE4_100%)] text-[#101828]">
      <div className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
        <Link
          href="/blog"
          className="inline-flex rounded-full bg-white/55 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 backdrop-blur-sm transition-colors hover:bg-white"
        >
          Back to research
        </Link>

        <section className="py-12 sm:py-16">
          <div className="inline-flex rounded-full bg-[#4C9A6A]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#326548] ring-1 ring-[#4C9A6A]/15">
            Category
          </div>
          <h1 className="mt-5 text-5xl font-normal leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">
            {category.title}
          </h1>
          {category.description ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {category.description}
            </p>
          ) : null}
        </section>

        {category.posts?.length ? (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {category.posts.map((post) => (
              <CategoryPostCard key={post._id} post={post} />
            ))}
          </section>
        ) : (
          <div className="rounded-[2rem] border border-slate-900/10 bg-white/72 p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.04)] backdrop-blur-sm">
            <h2 className="text-2xl font-normal tracking-[-0.035em] text-slate-950">
              No research notes published in this category yet.
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
