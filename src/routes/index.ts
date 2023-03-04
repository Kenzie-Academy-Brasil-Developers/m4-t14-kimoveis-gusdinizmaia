import app from "../app";
import userRoutes from "./user.routes";
import loginRoutes from "./login.routes";
import categorieRoutes from "./category.routes";
import realEstateRoutes from "./realEstate.routes";
import scheduleRoutes from "./schedule.routes";
import { Router } from "express";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/login", loginRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/realEstate", realEstateRoutes);
routes.use("/schedules", scheduleRoutes);

export default routes;
