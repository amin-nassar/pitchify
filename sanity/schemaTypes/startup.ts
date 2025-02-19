import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "text",
      validation: (Rule) => {
        return Rule.min(1).max(20).required().error("Please Enter a Category");
      },
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
