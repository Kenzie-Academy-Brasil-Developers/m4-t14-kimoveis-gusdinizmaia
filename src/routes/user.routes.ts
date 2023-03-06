import { Router } from "express";
import {
  getAllUsersController,
  postUserController,
  patchUserController,
  deleteUserController,
} from "../controllers/user.controller";
import { verifyData } from "../middlewares/verifyData.middleware";
import { userCreateSchema } from "../schemas/user.schema";

const userRoutes = Router();

userRoutes.post("", verifyData(userCreateSchema), postUserController);
userRoutes.get("", getAllUsersController);
userRoutes.patch("/:id", patchUserController);
userRoutes.delete("/:id", deleteUserController);

export default userRoutes;
