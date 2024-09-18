import { defineField, defineType } from "sanity";
import { FaImage } from "react-icons/fa";


export default defineType({
    name: "imageBlock",
    title: "Image Block",
    type: "object",
    icon: FaImage,
    fields:[
        defineField({
            type: "image",
            options: {
                hotspot: true,
            },
            name: "image",
            title: "Image",
        }),
    ]
})