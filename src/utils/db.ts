import type { D1Database } from "@cloudflare/workers-types";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { D1Dialect } from "kysely-d1";
import { Kysely } from "kysely";

const initDbConnectionDev = () => {
  const { env } = getCloudflareContext();

  return new D1Dialect({
    database: (env as { DB: D1Database }).DB,
  });
};

const initDbConnection = () => {
  return new D1Dialect({
    database: process.env.DB,
  });
};

export const db = new Kysely({
  dialect: process.env.NODE_ENV === "production" ? initDbConnection() : initDbConnectionDev(),
});
