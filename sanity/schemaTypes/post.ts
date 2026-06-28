import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule.required().max(220).warning("Keep excerpts short and specific."),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "coverImageAlt",
      title: "Cover image alt text",
      type: "string",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { coverImage?: unknown };

          if (parent?.coverImage && !value) {
            return "Cover image alt text is required when a cover image is set.";
          }

          return true;
        }),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Updated at",
      type: "datetime",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "readingTime",
      title: "Reading time",
      description: "Estimated reading time in minutes.",
      type: "number",
      validation: (rule) => rule.min(1).integer(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      publishedAt: "publishedAt",
      media: "coverImage",
    },
    prepare({ title, author, publishedAt, media }) {
      const date = publishedAt
        ? new Intl.DateTimeFormat("en", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }).format(new Date(publishedAt))
        : undefined;

      return {
        title,
        subtitle: [author, date].filter(Boolean).join(" · "),
        media,
      };
    },
  },
});
