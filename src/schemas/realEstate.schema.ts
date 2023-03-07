import { boolean, number, string, z } from "zod";
import { addressSchema } from "./address.schema";

const realEstateCreateSchema = z.object({
  value: number(),
  size: number().int(),
  city: string().max(20),
  state: string().max(2),
  address: addressSchema,
  categoryId: number(),
});

const realEstateSchema = realEstateCreateSchema.extend({
  id: number(),
  sold: boolean(),
  createdAt: string(),
  updateAt: string(),
});

export { realEstateCreateSchema, realEstateSchema };
