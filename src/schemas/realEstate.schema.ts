import { z } from "zod";
import { addressCreateSchema, addressSchema } from "./address.schema";
import { categorySchema } from "./category.schema";

const realEstateCreateSchema = z.object({
  value: z.number(),
  size: z.number().int(),
  address: addressCreateSchema,
  categoryId: z.number().int().optional(),
});

const realEstateSchema = realEstateCreateSchema.extend({
  id: z.number(),
  sold: z.boolean(),
  createdAt: z.string(),
  updateAt: z.string(),
  address: addressSchema,
  categoryId: categorySchema.optional(),
});

export { realEstateCreateSchema, realEstateSchema };
