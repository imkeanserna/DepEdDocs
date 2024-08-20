import { CreateTaskSchema } from "~/app/_lib/validations";

export type User = {
  clerkUserId: string,
  email: string,
  firstName: string,
  lastName: string,
  imageUrl?: string
}

export type Record = CreateTaskSchema & {
  id: string,
  createdAt: Date,
  updatedAt: Date
}
