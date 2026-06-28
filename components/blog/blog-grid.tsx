import type { BlogPostListItem } from "@/sanity/lib/types";

import { BlogCard } from "./blog-card";

type BlogGridProps = {
  posts: BlogPostListItem[];
};

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </section>
  );
}
