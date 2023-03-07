import { Router } from "express";
import {
  getAllUsersController,
  postUserController,
  patchUserController,
  deleteUserController,
} from "../controllers/user.controller";
import { User } from "../entities";
import { verifyData } from "../middlewares/verifyData.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyUniqueKeys } from "../middlewares/verifyUniqueKey.middleware";
import { userCreateSchema, userPatchSchema } from "../schemas/user.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  verifyData(userCreateSchema),
  verifyUniqueKeys(User, "email"),
  postUserController
);
userRoutes.get("", verifyToken, getAllUsersController);
userRoutes.patch("/:id", verifyData(userPatchSchema), patchUserController);
userRoutes.delete("/:id", deleteUserController);

export default userRoutes;
