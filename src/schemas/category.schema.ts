import { z } from "zod";

const categoryCreateSchema = z.object({
  name: z.string().max(45),
});

const categorySchema = categoryCreateSchema.extend({ id: z.number() });

export { categoryCreateSchema, categorySchema };
