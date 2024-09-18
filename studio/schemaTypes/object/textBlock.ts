import { defineField, defineType } from "sanity";


export default defineType({
    name: "textBlock",
    title: "Content Block",
    type: "object",
    fields: [
        defineField({
            type: "array",
            name: "content",
            title: "Content",
            of: [
              {
                type: "block",
              }
            ],
            validation: (rule) => rule.required().min(1),
        })
    ]
})