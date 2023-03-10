import { z } from "zod";
import { addressCreateSchema, addressSchema } from "../schemas/address.schema";

type iAddressCreate = z.infer<typeof addressCreateSchema>;
type iAddress = z.infer<typeof addressSchema>;

export { iAddressCreate, iAddress };
