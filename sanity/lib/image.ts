import imageUrlBuilder from "@sanity/image-url";

import { getSanityClient } from "./client";

type SanityImageSource = Parameters<
  ReturnType<typeof imageUrlBuilder>["image"]
>[0];

let builder: ReturnType<typeof imageUrlBuilder> | null = null;

function getImageBuilder() {
  if (!builder) {
    builder = imageUrlBuilder(getSanityClient());
  }

  return builder;
}

export function urlFor(source: SanityImageSource) {
  return getImageBuilder().image(source);
}
