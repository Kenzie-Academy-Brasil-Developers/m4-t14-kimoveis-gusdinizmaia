import { nullable, number, z } from "zod";

const userCreateSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().optional(),
  password: z.string().max(120),
});

const userPatchSchema = userCreateSchema.partial().omit({
  admin: true,
});

const userSchema = userCreateSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const returnUserSchema = userSchema.omit({ password: true });

const returnUsersSchema = z.array(returnUserSchema);

const userLoginSchema = z.object({
  email: z.string().max(45),
  password: z.string().max(120),
});

export {
  userSchema,
  userCreateSchema,
  userPatchSchema,
  returnUsersSchema,
  returnUserSchema,
  userLoginSchema,
};
