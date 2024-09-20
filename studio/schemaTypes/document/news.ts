import { defineField, defineType } from "sanity"


export default defineType({
    title: "news",
    name: "news",
    type: "document",
    fields: [
        defineField({
            name: "imageBlock",
            title: "ImageBlock",
            type: "imageBlock"
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