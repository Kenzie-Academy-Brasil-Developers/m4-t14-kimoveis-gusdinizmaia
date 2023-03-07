import { boolean, date, number, string, z } from "zod";

const userCreateSchema = z.object({
  name: string().max(45),
  email: string().max(45),
  admin: boolean(),
  password: string().max(120),
});

const userPatchSchema = userCreateSchema.partial().omit({
  admin: true,
});

const userSchema = userCreateSchema.extend({
  id: number(),
  createdAt: date(),
  updateAt: date(),
  deletedAt: date().nullish(),
});

const returnUserSchema = userSchema.omit({ password: true });

const returnUsersSchema = z.array(returnUserSchema);

const userLoginSchema = z.object({
  email: string().max(45),
  password: string().max(120),
});

export {
  userSchema,
  userCreateSchema,
  userPatchSchema,
  returnUserSchema,
  returnUsersSchema,
  userLoginSchema,
};
