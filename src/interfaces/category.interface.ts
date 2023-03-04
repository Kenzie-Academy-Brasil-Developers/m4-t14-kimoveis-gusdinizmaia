import { z } from "zod";
import { categorySchema } from "../schemas/category.schema";

type iCategory = z.infer<typeof categorySchema>;

export { iCategory };
