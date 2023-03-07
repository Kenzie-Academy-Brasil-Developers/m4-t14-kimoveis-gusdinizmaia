import { z } from "zod";
import {
  categoryCreateSchema,
  categorySchema,
} from "../schemas/category.schema";

type iCreateCategory = z.infer<typeof categoryCreateSchema>;
type iCategory = z.infer<typeof categorySchema>;
type iRealEstateByCategory = iCategory[] | iCategory | [];

export { iCreateCategory, iCategory, iRealEstateByCategory };
