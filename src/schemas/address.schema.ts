import { string, z } from "zod";

const addressSchema = z.object({
  street: string().max(45),
  zipCode: string().max(8),
  number: string().max(6).optional(),
  city: string().max(20),
  state: string().max(2),
});

export { addressSchema };
