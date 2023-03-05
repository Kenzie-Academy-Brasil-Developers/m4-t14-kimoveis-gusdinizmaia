import { boolean, date, number, string, z } from "zod";

const userSchema = z.object({
  id: number(),
  name: string().max(45),
  email: string().max(45).optional(),
  admin: boolean(),
  password: string().max(120),
  createdAt: date(),
  updateAt: date(),
  deletedAt: date().nullish(),
});

export { userSchema };
