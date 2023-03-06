import { boolean, date, number, string, z } from "zod";

const userCreateSchema = z.object({
  id: number(),
  name: string().max(45),
  email: string().max(45),
  admin: boolean(),
  password: string().max(120),
});

const userPatchSchema = userCreateSchema.partial().omit({
  id: true,
  admin: true,
});

const userSchema = userCreateSchema.extend({
  createdAt: date(),
  updateAt: date(),
  deletedAt: date().nullish(),
});

const returnUserSchema = userSchema.omit({ password: true });

const returnUsersSchema = z.array(returnUserSchema);

export {
  userSchema,
  userCreateSchema,
  userPatchSchema,
  returnUserSchema,
  returnUsersSchema,
};
