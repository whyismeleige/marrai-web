import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogHeader } from "@/components/blog/blog-header";
import { hasSanityConfig } from "@/sanity/config/env";
import { client } from "@/sanity/lib/client";
import {
  CATEGORY_SLUGS_QUERY,
  POSTS_BY_CATEGORY_QUERY,
} from "@/sanity/lib/queries";
import type { BlogCategoryPage } from "@/sanity/lib/types";

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

        <BlogHeader
          eyebrow="Category"
          title={category.title}
          description={category.description}
        />

        {category.posts?.length ? (
          <BlogGrid posts={category.posts} />
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
