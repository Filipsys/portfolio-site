"use server";

import { messages } from "@/db/auth-schema";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";

export const checkUserSavedMessage = async (userId: string) => {
  const result = await db.select().from(messages).where(eq(messages.userId, userId));

  return result.length > 0;
};
