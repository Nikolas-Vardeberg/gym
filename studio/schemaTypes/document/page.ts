import { defineArrayMember, defineField, defineType } from "sanity";


export default defineType({
    type: "document",
    name: "page",
    title: "Page",
    groups: [
        {
            name: "page",
            title: "Page",
            default: true,
        },
        {
            name: "seo",
            title: "Seo",
            default: false,
        },
    ],
    fields: [
        defineField({
            title: "Seo",
            name: "seo",
            type: "seoMetaFields",
            group: "seo",
        }),
        defineField({
            type: "slug",
            name: "slug",
            title: "Slug",
            options: {
                source: "title",
            },
            validation: (rule) => rule.required(),
            group: "page",
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
            ],
            group: "page",
        })
    ]
})