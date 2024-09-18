import { defineField, defineType } from "sanity";
import { MdOutlineTextFields } from "react-icons/md";


export default defineType({
    name: "textBlock",
    title: "Content Block",
    type: "object",
    icon: MdOutlineTextFields,
    fields: [
        defineField({
            type: "array",
            name: "content",
            title: "Content",
            of: [
              {
                type: "block",
              }
            ],
            validation: (rule) => rule.required().min(1),
        })
    ]
})