import { pgTable, serial, text } from "drizzle-orm/pg-core";


export const Members = pgTable("members", {
    userId: text("user_id").primaryKey(),
    userName: text("user_name").notNull().default("User"),
})

export const courses = pgTable("kurs", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
}) 