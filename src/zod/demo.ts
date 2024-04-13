import z from "zod";

export const user = z.object({
  firstname: z.string(),
  lastname: z.string(),
});

export const newUser = await user.parse({ firstname: "John", lastname: "Doe" });
/**
 * {
 *    firstname: string;
 *    lastname: string
 * }
 */

export type User = z.infer<typeof user>;
/**
 * {
 *    firstname: string;
 *    lastname: string
 * }
 */
