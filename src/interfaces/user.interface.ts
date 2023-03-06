import { z } from "zod";
import {
  returnUserSchema,
  userCreateSchema,
  userPatchSchema,
  userSchema,
} from "../schemas/user.schema";

type iUser = z.infer<typeof userSchema>;
type iUserCreate = z.infer<typeof userCreateSchema>;
type iUserPatch = z.infer<typeof userPatchSchema>;
type iReturnUser = z.infer<typeof returnUserSchema>;

export { iUser, iUserCreate, iUserPatch, iReturnUser };
