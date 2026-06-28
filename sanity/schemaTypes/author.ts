import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "object",
      fields: [
        defineField({ name: "x", title: "X", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
        defineField({ name: "website", title: "Website", type: "url" }),
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
