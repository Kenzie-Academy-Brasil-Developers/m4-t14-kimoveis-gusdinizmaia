import { Router } from "express";
import {
  getSchedulesByRealEstateController,
  postScheduleController,
} from "../controllers/schedule.controller";
import { verifyData } from "../middlewares/verifyData.middleware";
import { verifyUserExist } from "../middlewares/verifyExist.middleware";
import { scheduleCreateSchema } from "../schemas/schedule.schema";

const scheduleRoutes = Router();

scheduleRoutes.post(
  "",
  verifyUserExist,
  verifyData(scheduleCreateSchema),
  postScheduleController
);
scheduleRoutes.get("/realEstate/:id", getSchedulesByRealEstateController);

export default scheduleRoutes;
