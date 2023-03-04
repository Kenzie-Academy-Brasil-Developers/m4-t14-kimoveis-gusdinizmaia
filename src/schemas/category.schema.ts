import { string, z } from "zod";

const categorySchema = z.object({
  name: string().max(45),
});

export { categorySchema };
