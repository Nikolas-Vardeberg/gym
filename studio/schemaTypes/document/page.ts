import { defineArrayMember, defineField, defineType } from "sanity";


export default defineType({
    type: "document",
    name: "page",
    title: "Page",
    fields: [
        defineField({
            type: "slug",
            name: "slug",
            title: "Slug",
            options: {
                source: "title",
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: "array",
            name: "sections",
            title: "Sections",
            of: [
                defineArrayMember({ type: "hero"}),
                defineArrayMember({ type: "news"}),
                defineArrayMember({ type: "service"}),
                defineArrayMember({ type: "mediaModule"}),
            ]
        })
    ]
})