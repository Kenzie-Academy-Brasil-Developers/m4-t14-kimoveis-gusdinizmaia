import { z } from "zod";
import {
  realEstateCreateSchema,
  realEstateSchema,
} from "../schemas/realEstate.schema";

type iRealEstate = z.infer<typeof realEstateSchema>;
type iRealEstateCreate = z.infer<typeof realEstateCreateSchema>;

export { iRealEstate, iRealEstateCreate };
