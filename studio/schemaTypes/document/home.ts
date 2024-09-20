import { defineArrayMember, defineField, defineType } from "sanity";
import { MdHome } from "react-icons/md";



export default defineType({
    type: "document",
    name: "home",
    title: "Home",
    icon: MdHome,
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
            name: "title",
            title: "Title",
            type: "string",
            initialValue: "Home",
        }),
        defineField({
            type: "array",
            name: "sections",
            title: "Sections",
            of: [
                defineArrayMember({ type: "hero"}),
                defineArrayMember({ type: "service"}),
                defineArrayMember({ type: "mediaModule"}),
                defineArrayMember({ type: "newsBlock"})
            ],
            group: "page",
        })
    ]
})