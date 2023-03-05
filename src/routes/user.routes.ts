import { Router } from "express";
import { postUserController } from "../controllers/user.controller";
import { verifyData } from "../middlewares/verifyData.middleware";
import { userCreateSchema } from "../schemas/user.schema";

const userRoutes = Router();

userRoutes.post("", verifyData(userCreateSchema), postUserController);
userRoutes.get("");
userRoutes.patch("/:id");
userRoutes.delete("/:id");

export default userRoutes;
