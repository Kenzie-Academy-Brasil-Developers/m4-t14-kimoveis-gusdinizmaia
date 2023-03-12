import { Router } from "express";
import {
  getAllUsersController,
  postUserController,
  patchUserController,
  deleteUserController,
} from "../controllers/user.controller";
import { User } from "../entities";
import { verifyAdmin } from "../middlewares/verifyAdmin.middleware";
import { verifyAdminPermission } from "../middlewares/verifyAdminPermission.middleware";
import { verifyData } from "../middlewares/verifyData.middleware";
import { verifyUserExist } from "../middlewares/verifyUserExist.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyUniqueEmail } from "../middlewares/verifyUniqueEmail.middleware";
import { userCreateSchema, userPatchSchema } from "../schemas/user.schema";
import { verifyGetUsers } from "../middlewares/verifyGetUsers.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  verifyData(userCreateSchema),
  verifyUniqueEmail,
  postUserController
);
userRoutes.get("", verifyToken, verifyGetUsers, getAllUsersController);
userRoutes.patch(
  "/:id",
  verifyToken,
  verifyUserExist,
  verifyAdminPermission,
  verifyData(userPatchSchema),
  patchUserController
);
userRoutes.delete(
  "/:id",
  verifyToken,
  verifyUserExist,
  verifyAdmin,
  deleteUserController
);

export default userRoutes;
