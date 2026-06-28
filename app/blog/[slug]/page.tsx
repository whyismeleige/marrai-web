import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CategoryPill } from "@/components/blog/category-pill";
import { PortableTextRenderer } from "@/components/blog/portable-text";
import { PostMeta } from "@/components/blog/post-meta";
import { SanityImage } from "@/components/blog/sanity-image";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { hasSanityConfig } from "@/sanity/config/env";
import { getSanityClient } from "@/sanity/lib/client";
import { getCanonicalUrl, getOpenGraphImage } from "@/sanity/lib/metadata";
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

  return getSanityClient().fetch<BlogPostDetail | null>(POST_BY_SLUG_QUERY, {
    slug,
  });
}

export async function generateStaticParams() {
  if (!hasSanityConfig()) {
    return [];
  }

  const slugs =
    await getSanityClient().fetch<Array<{ slug: string }>>(POST_SLUGS_QUERY);

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

  const title = post.seo?.metaTitle ?? post.title;
  const description = post.seo?.metaDescription ?? post.excerpt;
  const canonical = getCanonicalUrl(`/blog/${post.slug}`);
  const images = getOpenGraphImage(
    post.seo?.ogImage ?? post.coverImage,
    post.coverImageAlt ?? post.title,
  );

  return {
    title,
    description,
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
    robots: post.seo?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
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
              <CategoryPill
                key={category.slug}
                category={category}
                href={`/blog/category/${category.slug}`}
              />
            ))}
          </div>
          <h1 className="mt-6 text-5xl font-normal leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {post.excerpt}
          </p>
          <div className="mt-6">
            <PostMeta post={post} longDate />
          </div>
        </header>

        {post.coverImage ? (
          <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white/60 shadow-[0_18px_54px_rgba(15,23,42,0.05)]">
            <SanityImage
              image={post.coverImage}
              alt={post.coverImageAlt ?? ""}
              width={1400}
              height={780}
              priority
            />
          </div>
        ) : null}

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_240px]">
          <div className="rounded-[2rem] border border-slate-900/10 bg-white/78 p-5 shadow-[0_18px_54px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-8">
            <PortableTextRenderer value={post.body ?? []} />
          </div>
          <TableOfContents body={post.body ?? []} />
        </div>
      </article>
    </main>
  );
}
