import { Router } from "express";
import { postLoginController } from "../controllers/login.controller";

const loginRoutes = Router();

loginRoutes.post("", postLoginController);

export default loginRoutes;
