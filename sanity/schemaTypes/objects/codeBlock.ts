import { defineField, defineType } from "sanity";

export const codeBlock = defineType({
  name: "codeBlock",
  title: "Code block",
  type: "object",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      initialValue: "text",
      options: {
        list: [
          { title: "Text", value: "text" },
          { title: "TypeScript", value: "ts" },
          { title: "TSX", value: "tsx" },
          { title: "JavaScript", value: "js" },
          { title: "JSON", value: "json" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "Shell", value: "sh" },
        ],
      },
    }),
    defineField({
      name: "filename",
      title: "Filename",
      type: "string",
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "text",
      rows: 12,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      filename: "filename",
      language: "language",
      code: "code",
    },
    prepare({ filename, language, code }) {
      return {
        title: filename || `${language ?? "text"} code block`,
        subtitle: code,
      };
    },
  },
});
