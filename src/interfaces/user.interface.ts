import { z } from "zod";
import {
  returnUserSchema,
  userCreateSchema,
  userLoginSchema,
  userPatchSchema,
  userSchema,
} from "../schemas/user.schema";

type iUser = z.infer<typeof userSchema>;
type iUserCreate = z.infer<typeof userCreateSchema>;
type iUserPatch = z.infer<typeof userPatchSchema>;
type iReturnUser = z.infer<typeof returnUserSchema>;

type iUserLogin = z.infer<typeof userLoginSchema>;
export { iUser, iUserCreate, iUserPatch, iReturnUser, iUserLogin };
