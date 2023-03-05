import { boolean, date, number, string, z } from "zod";

const userCreateSchema = z.object({
  id: number(),
  name: string().max(45),
  email: string().max(45),
  admin: boolean(),
  password: string().max(120),
});

const userSchema = userCreateSchema.extend({
  createdAt: date(),
  updateAt: date(),
  deletedAt: date().nullish(),
});

const returnUserCreate = userSchema.omit({ password: true });

export { userSchema, userCreateSchema, returnUserCreate };
