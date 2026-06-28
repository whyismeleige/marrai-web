import Image from "next/image";

import type { SanityImage as SanityImageType } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

type SanityImageProps = {
  image?: SanityImageType;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function SanityImage({
  image,
  alt,
  width,
  height,
  className,
  priority,
}: SanityImageProps) {
  if (!image?.asset?._ref && !image?.asset?._id) {
    return null;
  }

  const src = urlFor(image)
    .width(width)
    .height(height)
    .fit("crop")
    .auto("format")
    .url();

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
