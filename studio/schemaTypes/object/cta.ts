import { defineField, defineType } from "sanity";
import { CgPlayButtonR } from "react-icons/cg";


export default defineType({
    name: "cta",
    title: "Cta",
    type: "object",
    icon: CgPlayButtonR,
    fields: [
        defineField({
            type: "boolean",
            name: "hasPrimaryCta",
            title: "Has Primary Cta",
            initialValue: true,
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: "string",
            name: "url",
            title: "Url",
        }),
        defineField({
            type: "string",
            name: "text",
            title: "Text",
        }),
    ]
})