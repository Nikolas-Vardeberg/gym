import { defineField, defineType } from "sanity";
import { BiCategory } from "react-icons/bi";



export default defineType({
    title: "Categories",
    name: "category",
    type: "document",
    icon: BiCategory,
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            }
        }),
        defineField({
            type: "array",
            name: "description",
            title: "Description",
            of: [
              {
                type: "block",
              }
            ],
            validation: (rule) => rule.required().min(1),
        })       
    ]
})