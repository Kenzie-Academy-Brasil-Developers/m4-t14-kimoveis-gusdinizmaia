import { z } from "zod";

const addressCreateSchema = z.object({
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const addressSchema = addressCreateSchema.extend({ id: z.number() });

export { addressCreateSchema, addressSchema };
