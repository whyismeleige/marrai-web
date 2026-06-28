export type SanityImage = {
  _type?: "image";
  asset?: {
    _ref?: string;
    _id?: string;
    url?: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width?: number;
        height?: number;
      };
    };
  };
  crop?: Record<string, unknown>;
  hotspot?: Record<string, unknown>;
};

export type PortableTextImage = SanityImage & {
  alt?: string;
  caption?: string;
};

export type BlogCategory = {
  title: string;
  slug: string;
  description?: string;
  color?: "mint" | "sky" | "sand" | "slate";
};

export type BlogAuthor = {
  name: string;
  slug?: string;
  role?: string;
  image?: SanityImage;
  bio?: string;
};

export type BlogSEO = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
};

export type BlogPostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: SanityImage;
  coverImageAlt?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: number;
  featured?: boolean;
  categories?: BlogCategory[];
  author?: BlogAuthor;
};

export type BlogPostDetail = BlogPostListItem & {
  body: Array<Record<string, unknown>>;
  seo?: BlogSEO;
};

export type BlogCategoryPage = BlogCategory & {
  posts: BlogPostListItem[];
};
