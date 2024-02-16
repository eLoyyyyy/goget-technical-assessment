import { z } from "zod";

export const UserIdSchema = z.string()

export type UserId = z.infer<typeof UserIdSchema>
