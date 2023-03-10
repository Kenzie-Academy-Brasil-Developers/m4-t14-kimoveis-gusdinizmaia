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
  updateAt: z.string(),
  deleteAt: z.string().nullish(),
});

const returnUserWithAdmin = userSchema.omit({
  password: true,
  email: true,
  name: true,
  admin: true,
});

const returnUserWithoutAdmin = userSchema.omit({
  password: true,
});

const returnUsersSchema = z.array(returnUserWithoutAdmin);

const returnUserSchema = returnUserWithoutAdmin;

const userLoginSchema = z.object({
  email: z.string().max(45),
  password: z.string().max(120),
});

export {
  userSchema,
  userCreateSchema,
  userPatchSchema,
  returnUsersSchema,
  returnUserWithAdmin,
  returnUserWithoutAdmin,
  returnUserSchema,
  userLoginSchema,
};
