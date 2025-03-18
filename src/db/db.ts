import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const sqlite = new Database("sqlite.db");
export const db = drizzle({ client: sqlite });

// const result = await db.execute("select 1");
