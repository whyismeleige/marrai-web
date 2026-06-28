import { defineArrayMember, defineField, defineType } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Block content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          { type: "externalLink" },
          defineArrayMember({
            name: "internalPostLink",
            title: "Internal post link",
            type: "object",
            fields: [
              defineField({
                name: "reference",
                title: "Post",
                type: "reference",
                to: [{ type: "post" }],
                validation: (rule) => rule.required(),
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      name: "bodyImage",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
      ],
    }),
    defineArrayMember({ type: "callout" }),
    defineArrayMember({ type: "codeBlock" }),
  ],
  validation: (rule) => rule.required(),
});
