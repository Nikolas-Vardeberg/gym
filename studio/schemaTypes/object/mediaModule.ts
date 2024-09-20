import { defineField, defineType } from "sanity";
import { LiaImages } from "react-icons/lia";



export default defineType({
    name: "mediaModule",
    type: "object",
    title: "Media Module",
    icon: LiaImages,
    fields: [
        defineField({
            name: "imageBlock",
            title: "ImageBlock",
            type: "imageBlock"
        }),
        defineField({
            type: 'boolean',
            name: 'imageOnRight',
            title: 'Image On Right',
            initialValue: true,
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: "string",
            name: "heading",
            title: "Heading",
        }),
        defineField({
            type: "string",
            name: "body",
            title: "Body",
        }),
        defineField({
            name: "cta",
            type: "cta",
            title: "Cta",
        })
    ],
    preview: {
        select: {
            title: "heading",
            media: "image",
        },
        prepare({ title, media }) {
            return {
                subtitle: "Media Module",
                media,
                title,
            }
        }
    }
})