import { defineField, defineType } from "sanity";


export default defineType({
    name: "cta",
    title: "Cta",
    type: "object",
    fields: [
        defineField({
            type: "boolean",
            name: "hasPrimaryCta",
            title: "Has Primary Cta",
            initialValue: true,
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: "string",
            name: "url",
            title: "Url",
        }),
        defineField({
            type: "string",
            name: "text",
            title: "Text",
        }),
    ]
})