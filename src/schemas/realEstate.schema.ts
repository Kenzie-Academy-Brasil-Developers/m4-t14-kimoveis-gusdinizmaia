import { boolean, number, string, z } from "zod";
import { addressSchema } from "./address.schema";

const realEstateCreateSchema = z.object({
  value: number(),
  size: number().int(),
  address: addressSchema,
  categoryId: number().optional(),
});

const realEstateSchema = realEstateCreateSchema.extend({
  id: number(),
  sold: boolean(),
  createdAt: string(),
  updateAt: string(),
});

export { realEstateCreateSchema, realEstateSchema };
