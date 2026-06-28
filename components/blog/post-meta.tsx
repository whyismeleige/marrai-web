import type { BlogPostListItem } from "@/sanity/lib/types";

type PostMetaProps = {
  post: Pick<BlogPostListItem, "author" | "publishedAt" | "readingTime">;
  longDate?: boolean;
};

export function PostMeta({ post, longDate = false }: PostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
      {post.author?.name ? <span>{post.author.name}</span> : null}
      {post.publishedAt ? (
        <time dateTime={post.publishedAt}>
          {new Intl.DateTimeFormat("en", {
            month: longDate ? "long" : "short",
            day: "numeric",
            year: "numeric",
          }).format(new Date(post.publishedAt))}
        </time>
      ) : null}
      {post.readingTime ? <span>{post.readingTime} min read</span> : null}
    </div>
  );
}
