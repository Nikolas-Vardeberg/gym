import { defineField, defineType } from "sanity";

export default defineType({
    name: "newsBlock",
    title: "News Block",
    type: "object",
    fields: [
        defineField({
            type: "array",
            name: "newsItem",
            title: "Nyheter",
            of: [
                defineField({
                    title: "Parent News",
                    name: "parents",
                    type: "reference", 
                    to: [{ type: "news" }],
                })
            ]
        })
    ]
})
