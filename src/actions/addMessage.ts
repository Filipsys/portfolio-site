"use server";

import { db } from "@/db/db";
import { messages } from "@/db/auth-schema";

export const addMessage = async (userId: string, displayName: string, message?: string) => {
  const createdAt = new Date();

  await db.insert(messages).values({
    userId: userId,
    displayName: displayName,
    message: message ?? "No message",
    createdAt: createdAt,
  });

  return true;
};
