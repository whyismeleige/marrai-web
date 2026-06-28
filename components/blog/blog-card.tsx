import Link from "next/link";

import type { BlogPostListItem } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

import { CategoryPill } from "./category-pill";
import { PostMeta } from "./post-meta";
import { SanityImage } from "./sanity-image";

type BlogCardProps = {
  post: BlogPostListItem;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group block h-full overflow-hidden rounded-[1.75rem] border border-slate-900/10 bg-white/78 shadow-[0_14px_38px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4C9A6A]/25 hover:shadow-[0_22px_54px_rgba(15,23,42,0.08)]",
        featured && "grid lg:grid-cols-[0.9fr_1.1fr]",
      )}
    >
      {post.coverImage ? (
        <div
          className={cn(
            "border-b border-slate-900/10 bg-white/50",
            featured && "lg:border-r lg:border-b-0",
          )}
        >
          <SanityImage
            image={post.coverImage}
            alt={post.coverImageAlt ?? ""}
            width={featured ? 960 : 720}
            height={featured ? 640 : 420}
            className={cn(
              "aspect-[16/10]",
              featured && "h-full min-h-[260px]",
            )}
            priority={featured}
          />
        </div>
      ) : null}

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {post.categories?.slice(0, 2).map((category) => (
            <CategoryPill key={category.slug} category={category} />
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
        <div className="mt-6">
          <PostMeta post={post} />
        </div>
      </div>
    </Link>
  );
}
