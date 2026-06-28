import Link from "next/link";

import type { BlogCategory } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

type CategoryPillProps = {
  category: BlogCategory;
  href?: string;
  className?: string;
};

export function CategoryPill({ category, href, className }: CategoryPillProps) {
  const content = (
    <span
      className={cn(
        "inline-flex rounded-full bg-[#4C9A6A]/10 px-3 py-1 text-[11px] font-medium text-[#326548] ring-1 ring-[#4C9A6A]/15",
        className,
      )}
    >
      {category.title}
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="inline-flex">
      {content}
    </Link>
  );
}
