import "dotenv/config"
import {drizzle} from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema});

const main = async () => {
    try {
        console.log("deleting db");

        await db.delete(schema.Members);
        await db.delete(schema.courses);

    } catch (error) {
        console.log(error);
        throw new Error("Failed to seed db");
    } 
}

main();