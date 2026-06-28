import { groq } from "next-sanity";

const publishedFilter =
  'defined(slug.current) && defined(publishedAt) && publishedAt <= now()';

const authorFields = groq`
  name,
  "slug": slug.current,
  role,
  image,
  bio
`;

const categoryFields = groq`
  title,
  "slug": slug.current,
  description,
  color
`;

const postListFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  coverImageAlt,
  publishedAt,
  updatedAt,
  readingTime,
  featured,
  "categories": categories[]->{
    ${categoryFields}
  },
  "author": author->{
    ${authorFields}
  }
`;

export const POSTS_QUERY = groq`
  *[_type == "post" && ${publishedFilter}]
    | order(publishedAt desc) {
      ${postListFields}
    }
`;

export const FEATURED_POSTS_QUERY = groq`
  *[_type == "post" && featured == true && ${publishedFilter}]
    | order(publishedAt desc) {
      ${postListFields}
    }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug && ${publishedFilter}][0] {
    ${postListFields},
    body[] {
      ...,
      markDefs[] {
        ...,
        _type == "internalPostLink" => {
          ...,
          "slug": reference->slug.current
        }
      }
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage,
      noIndex
    }
  }
`;

export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && ${publishedFilter}] {
    "slug": slug.current
  }
`;

export const CATEGORIES_QUERY = groq`
  *[_type == "category" && defined(slug.current)]
    | order(title asc) {
      ${categoryFields}
    }
`;

export const CATEGORY_SLUGS_QUERY = groq`
  *[_type == "category" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const POSTS_BY_CATEGORY_QUERY = groq`
  *[_type == "category" && slug.current == $slug][0] {
    ${categoryFields},
    "posts": *[
      _type == "post" &&
      references(^._id) &&
      ${publishedFilter}
    ] | order(publishedAt desc) {
      ${postListFields}
    }
  }
`;
