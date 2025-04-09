"use server";

import { messages } from "@/db/auth-schema";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";

export const checkUserSavedMessage = async (userId: string) => {
  const result = await db.select().from(messages).where(eq(messages.userId, userId));
  console.log("User id: ", userId);
  console.log("Server-side result:", result);
  console.log("Server-side result type:", typeof result);

  return result.length > 0;
};
