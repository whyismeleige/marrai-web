import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { hasSanityConfig } from "@/sanity/config/env";
import { client } from "@/sanity/lib/client";
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import type { BlogPostDetail } from "@/sanity/lib/types";

export const revalidate = 3600;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string) {
  if (!hasSanityConfig()) {
    return null;
  }

  return client.fetch<BlogPostDetail | null>(POST_BY_SLUG_QUERY, { slug });
}

export async function generateStaticParams() {
  if (!hasSanityConfig()) {
    return [];
  }

  const slugs = await client.fetch<Array<{ slug: string }>>(POST_SLUGS_QUERY);

  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Research — Marrai",
    };
  }

  return {
    title: post.seo?.metaTitle ?? post.title,
    description: post.seo?.metaDescription ?? post.excerpt,
    robots: post.seo?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
    openGraph: {
      title: post.seo?.metaTitle ?? post.title,
      description: post.seo?.metaDescription ?? post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.metaTitle ?? post.title,
      description: post.seo?.metaDescription ?? post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-[100svh] bg-[linear-gradient(180deg,#CFEAF8_0%,#EEF5F1_42%,#E7EFE4_100%)] text-[#101828]">
      <article className="mx-auto w-full max-w-4xl px-5 py-6 sm:px-8 lg:px-10">
        <Link
          href="/blog"
          className="inline-flex rounded-full bg-white/55 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 backdrop-blur-sm transition-colors hover:bg-white"
        >
          Back to research
        </Link>

        <header className="py-12 sm:py-16">
          <div className="flex flex-wrap gap-2">
            {post.categories?.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="rounded-full bg-[#4C9A6A]/10 px-3 py-1 text-[11px] font-medium text-[#326548] ring-1 ring-[#4C9A6A]/15"
              >
                {category.title}
              </Link>
            ))}
          </div>
          <h1 className="mt-6 text-5xl font-normal leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
            {post.author?.name ? <span>{post.author.name}</span> : null}
            <time dateTime={post.publishedAt}>
              {new Intl.DateTimeFormat("en", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }).format(new Date(post.publishedAt))}
            </time>
            {post.readingTime ? <span>{post.readingTime} min read</span> : null}
          </div>
        </header>

        <div className="rounded-[2rem] border border-slate-900/10 bg-white/78 p-5 shadow-[0_18px_54px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-8">
          <div className="prose prose-slate max-w-none prose-headings:font-normal prose-headings:tracking-[-0.035em] prose-p:leading-8 prose-a:text-[#326548] prose-blockquote:border-[#4C9A6A] prose-pre:overflow-x-auto">
            <PortableText value={post.body ?? []} />
          </div>
        </div>
      </article>
    </main>
  );
}
