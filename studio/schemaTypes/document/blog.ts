import { defineArrayMember, defineField, defineType } from "sanity";
import { RiArticleLine } from "react-icons/ri";

export default defineType({
    name: "blog",
    title: "Blog",
    type: "document",
    icon: RiArticleLine,
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
            validation: (rule) => rule.required(),
            group: "page",
        }),
        defineField({
            type: "array",
            name: "sections",
            title: "Sections",
            of: [
                defineArrayMember({ type: "news"}),
                defineArrayMember({ type: "textBlock"}),
            ],
            group: "page",
        })
    ]
})