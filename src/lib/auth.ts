import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/db";

import * as schema from "@/db/auth-schema";
import { createAuthMiddleware } from "better-auth/api";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      disableDefaultScope: true,
      scope: ["read:user"],
    },
  },
  // TODO:
  // hooks: {
  //   after: createAuthMiddleware(async (ctx) => {
  //     if (ctx.path !== "/sign-in/social") return;

  //     console.log(ctx.context.tables);
  //     console.log(ctx.context.tables.user);

  //     return;
  //   }),
  // },
});
