import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/auth-schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: "./db.sqlite",
  },
});
