import { Router } from "express";
import { postLoginController } from "../controllers/login.controller";
import { verifyData } from "../middlewares/verifyData.middleware";
import { userLoginSchema } from "../schemas/user.schema";

const loginRoutes = Router();

loginRoutes.post("", verifyData(userLoginSchema), postLoginController);

export default loginRoutes;
