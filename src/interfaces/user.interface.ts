import { z } from "zod";
import {
  returnUserCreate,
  userCreateSchema,
  userSchema,
} from "../schemas/user.schema";

type iUser = z.infer<typeof userSchema>;
type iUserCreate = z.infer<typeof userCreateSchema>;
type iReturnUserCreate = z.infer<typeof returnUserCreate>;

export { iUser, iUserCreate, iReturnUserCreate };
