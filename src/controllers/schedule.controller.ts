import { Request, Response } from "express";
import { iSchedule } from "../interfaces/schedule.interface";
import { getSchedulesByRealEstateService } from "../services/schedule/getSchedulesByRealEstate.service";
import { postScheduleService } from "../services/schedule/postSchedule.service";

const postScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const schedule = req.body;
  const userId = req.user.id;

  const newSchedule = await postScheduleService(schedule, userId);

  return res.status(201).json(newSchedule);
};
const getSchedulesByRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);

  const schedules = await getSchedulesByRealEstateService(id);

  return res.status(200).json(schedules);
};

export { postScheduleController, getSchedulesByRealEstateController };
