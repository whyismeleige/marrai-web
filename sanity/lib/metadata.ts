import type { Metadata } from "next";

import type { SanityImage } from "./types";
import { urlFor } from "./image";

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL;

  if (!value) {
    return undefined;
  }

  try {
    return new URL(value);
  } catch {
    return undefined;
  }
}

export function getCanonicalUrl(pathname: string) {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return undefined;
  }

  return new URL(pathname, siteUrl).toString();
}

export function getOpenGraphImage(
  image?: SanityImage,
  alt?: string,
): NonNullable<Metadata["openGraph"]>["images"] {
  if (!image) {
    return undefined;
  }

  return [
    {
      url: urlFor(image)
        .width(1200)
        .height(630)
        .fit("crop")
        .auto("format")
        .url(),
      width: 1200,
      height: 630,
      alt,
    },
  ];
}
