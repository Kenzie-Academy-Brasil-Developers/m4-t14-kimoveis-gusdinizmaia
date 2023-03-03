import { Request, Response } from "express";
import { getSchedulesByRealEstateService } from "../services/schedule/getSchedulesByRealEstate.service";
import { postScheduleService } from "../services/schedule/postSchedule.service";

const postScheduleController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user = await postScheduleService();
  return res.status(201).json(user);
};
const getSchedulesByRealEstateController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const users = await getSchedulesByRealEstateService();
  return res.status(200).json(users);
};

export { postScheduleController, getSchedulesByRealEstateController };
