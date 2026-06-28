import { defineField, defineType } from "sanity";

export const callout = defineType({
  name: "callout",
  title: "Callout",
  type: "object",
  fields: [
    defineField({
      name: "tone",
      title: "Tone",
      type: "string",
      initialValue: "note",
      options: {
        layout: "radio",
        list: [
          { title: "Info", value: "info" },
          { title: "Warning", value: "warning" },
          { title: "Success", value: "success" },
          { title: "Note", value: "note" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      body: "body",
      tone: "tone",
    },
    prepare({ title, body, tone }) {
      return {
        title: title || `${tone ?? "Note"} callout`,
        subtitle: body,
      };
    },
  },
});
