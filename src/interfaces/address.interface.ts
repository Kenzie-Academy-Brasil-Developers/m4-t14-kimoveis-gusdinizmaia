import { z } from "zod";
import { addressSchema } from "../schemas/address.schema";

type iAddress = z.infer<typeof addressSchema>;

export { iAddress };
