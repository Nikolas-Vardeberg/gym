import { defineField, defineType } from "sanity"


export default defineType({
    title: "news",
    name: "news",
    type: "document",
    fields: [
        defineField({
            type: "image",
            options: {
                hotspot: true,
            },
            name: "image",
            title: "Image",
        }),
        defineField({
            title: "Parent Categories",
            name: "parents",
            type: "array",
            of: [{type: "reference", to:[{type:"category"}]}],
            options: {
                layout: "tags",
            },
        }),
        defineField({
            type: "string",
            name: "heading",
            title: "Heading",
        }),
        defineField({
            type: "string",
            name: "description",
            title: "Description",
        }),
    ]
})