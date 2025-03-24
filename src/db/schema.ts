import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text().notNull().primaryKey(),
  name: text().notNull(),
  email: text().notNull().unique("user_email_key"),
  emailVerified: integer().default(0).notNull(),
  image: text(),
  createdAt: integer().notNull(),
  updatedAt: integer().notNull(),
});

export const session = sqliteTable("session", {
  id: text().notNull().primaryKey(),
  expiresAt: integer().notNull(),
  ipAddress: text(),
  userAgent: text(),
  userId: text()
    .notNull()
    .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text().notNull().primaryKey(),
  accountId: text().notNull(),
  providerId: text().notNull(),
  userId: text()
    .notNull()
    .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
  accessToken: text(),
  refreshToken: text(),
  idToken: text(),
  expiresAt: integer(),
  password: text(),
});

export const verification = sqliteTable("verification", {
  id: text().notNull().primaryKey(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: integer().notNull(),
});

export const messages = sqliteTable("messages", {
  id: text().notNull().primaryKey(),
  userId: text()
    .notNull()
    .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
  displayName: text().notNull(),
  message: text(),
  sentAt: integer().notNull(),
});
