import { Router } from "express";
import {
  getSchedulesByRealEstateController,
  postScheduleController,
} from "../controllers/schedule.controller";

const scheduleRoutes = Router();

scheduleRoutes.post("", postScheduleController);
scheduleRoutes.get("/realEstate/:id", getSchedulesByRealEstateController);

export default scheduleRoutes;
