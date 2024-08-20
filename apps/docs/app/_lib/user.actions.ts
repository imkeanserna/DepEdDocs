"use server"
import db from "@repo/db/client"
import { handleError } from "~/lib/utils"
import { User } from "~/types"

export async function createUser(user: User) {
  try {
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.clerkUserId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl
      }
    });
    return newUser;
  } catch (error) {
    handleError(error)
  }
}
