import { Router } from "express";
import {
  getSchedulesByRealEstateController,
  postScheduleController,
} from "../controllers/schedule.controller";
import { verifyData } from "../middlewares/verifyData.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyDateSchedule } from "../middlewares/verifyDateSchedule.middleware";
import { scheduleCreateSchema } from "../schemas/schedule.schema";
import { verifyUniqueShedule } from "../middlewares/verifyUniqueShedule.midleware";

const scheduleRoutes = Router();

scheduleRoutes.post(
  "",
  verifyToken,
  verifyData(scheduleCreateSchema),
  verifyDateSchedule,
  verifyUniqueShedule,
  postScheduleController
);
scheduleRoutes.get("/:id", getSchedulesByRealEstateController);

export default scheduleRoutes;
