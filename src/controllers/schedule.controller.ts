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

  const newSchedule: iSchedule = await postScheduleService(schedule, userId);

  return res.status(201).json(newSchedule);
};
const getSchedulesByRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getSchedulesByRealEstateService();

  return res.status(200).json(users);
};

export { postScheduleController, getSchedulesByRealEstateController };
