"use server";

import { messages } from "@/db/auth-schema";
import { db } from "@/db/db";

export const getLastMessages = async (page = 1) => {
  const result = await db
    .select()
    .from(messages)
    .orderBy(messages.createdAt)
    .limit(page)
    .offset((page - 1) * 10);

  return result;
};
