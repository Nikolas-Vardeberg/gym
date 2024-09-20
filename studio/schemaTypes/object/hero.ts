import { defineField, defineType } from "sanity";
import { FaHome } from "react-icons/fa";


export default defineType({
    name: "hero",
    title: "Hero",
    type: "object",
    icon: FaHome,
    fields: [
        defineField({
            type: "image",
            options: {
                hotspot: true,
            },
            name: "backgroundImage",
            title: "Background Image",
        }),
        defineField({
            type: "string",
            name: "heading",
            title: "Heading",
        }),
        defineField({
            type: "string",
            name: "body",
            title: "Body"
        }),
        defineField({
            name: "cta",
            type: "cta",
            title: "Cta",
        })
    ],
    preview: {
        select: {
            title: "Heading",
            media: "backgroundImage",
        },
        prepare({ title, media }) {
            return {
                subtitle: "Hero",
                media,
                title,
            }
        }
    }
})