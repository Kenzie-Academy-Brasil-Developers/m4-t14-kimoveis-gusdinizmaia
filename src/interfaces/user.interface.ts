import { z } from "zod";
import { userSchema } from "../schemas/user.schema";

type iUser = z.infer<typeof userSchema>;

export { iUser };
