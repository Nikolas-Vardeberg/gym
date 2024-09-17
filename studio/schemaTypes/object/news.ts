import { defineField, defineType } from "sanity";

export default defineType({
    type: "object",
    name: "news",
    title: "Nyheter",
    fields: [
        defineField({
            type: "array",
            name: "newsItems",
            title: "Nyheter Blog",
            of: [
                defineField({
                    type: "object",
                    name: "newsItem",
                    title: "Nyheter Blog",
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
                            type: "array",
                            title: "Tag",
                            name: "tag",
                            of: [
                                {
                                    type: "string",
                                },
                            ],
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
            ]
        })
    ],
    preview: {
        select: {
            title: 'newsItems[0].heading',
            media: 'newsItems[0].image',
            subtite: 'newsItems[0].description',
        },
        prepare({ title, media, subtite }) {
            return {
                title: title || "No Heading",
                media: media,
                subtitle: subtite || "No Description",
            }
        }
    }
})
