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
import { verifyExist } from "../middlewares/verifyExist.middleware";
import { RealEstate } from "../entities";
import { verifyAdmin } from "../middlewares/verifyAdmin.middleware";
import { verifyDayAndHour } from "../middlewares/verifyDayAndHour.middleware";

const scheduleRoutes = Router();

scheduleRoutes.post(
  "",
  verifyToken,
  verifyData(scheduleCreateSchema),
  verifyDateSchedule,
  verifyUniqueShedule,
  postScheduleController
);
scheduleRoutes.get(
  "/realEstate/:id",
  verifyToken,
  verifyAdmin,
  verifyExist(RealEstate, "RealEstate"),
  verifyDayAndHour,
  getSchedulesByRealEstateController
);

export default scheduleRoutes;
