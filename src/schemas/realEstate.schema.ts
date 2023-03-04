import { boolean, number, string, z } from "zod";

const realEstateSchema = z.object({
  id: number(),
  sold: boolean(),
  value: number(),
  size: number().int(),
  city: string().max(20),
  state: string().max(2),
  createdAt: string(),
  updateAt: string(),
  addressId: number().int(),
  categoryId: number().int().optional(),
});

export { realEstateSchema };
