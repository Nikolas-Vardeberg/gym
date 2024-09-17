import { defineField, defineType } from "sanity";


export default defineType({
    name: "mediaModule",
    type: "object",
    title: "Media Module",
    fields: [
        defineField({
            type: 'image',
            options: {
              hotspot: true,
            },
            name: 'image',
            title: 'Image',
            validation: (rule) => rule.required(),
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