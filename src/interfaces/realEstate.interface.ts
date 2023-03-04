import { z } from "zod";
import { realEstateSchema } from "../schemas/realEstate.schema";

type iRealEstate = z.infer<typeof realEstateSchema>;

export { iRealEstate };
