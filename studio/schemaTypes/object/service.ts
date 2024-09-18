import { defineField, defineType } from "sanity";

export default defineType({
    type: "object",
    name: "service",
    title: "Service",
    fields: [
        defineField({
            type: "array",
            name: "serviceItems",
            title: "Service Items",
            of: [
                defineField({
                    type: "object",
                    name: "serviceItems",
                    title: "Service Items",
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
                            type: "string",
                            name: "heading",
                            title: "Heading",
                        }),
                        defineField({
                            name: "cta",
                            type: "cta",
                            title: "Cta",
                        })
                    ]
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'serviceItems[0].heading',
            media: 'serviceItems[0].image',
        },
        prepare({ title, media }) {
            return {
                title: title || "No Heading",
                media: media,
            }
        }
    }
})
