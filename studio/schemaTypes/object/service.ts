import { defineField, defineType } from "sanity";
import { LiaToolsSolid } from "react-icons/lia";


export default defineType({
    type: "object",
    name: "service",
    title: "Service",
    icon: LiaToolsSolid,
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
                            name: "imageBlock",
                            title: "ImageBlock",
                            type: "imageBlock"
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
