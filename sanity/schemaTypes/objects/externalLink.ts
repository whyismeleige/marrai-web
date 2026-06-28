import { defineField, defineType } from "sanity";

export const externalLink = defineType({
  name: "externalLink",
  title: "External link",
  type: "object",
  fields: [
    defineField({
      name: "href",
      title: "URL",
      type: "url",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https", "mailto"],
        }),
    }),
    defineField({
      name: "blank",
      title: "Open in new tab",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
