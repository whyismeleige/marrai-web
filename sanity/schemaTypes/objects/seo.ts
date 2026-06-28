import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule
          .min(80)
          .max(165)
          .warning("Aim for a clear search description between 80 and 165 characters."),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "noIndex",
      title: "No index",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
