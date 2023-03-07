import { number, string, z } from "zod";

const categoryCreateSchema = z.object({
  name: string().max(45),
});

const categorySchema = categoryCreateSchema.extend({ id: number() });

export { categoryCreateSchema, categorySchema };
