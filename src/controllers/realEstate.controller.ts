import { Request, Response } from "express";
import { getAllRealEstatesService } from "../services/realEstate/getAllRealEstates.service";
import { postRealEstateService } from "../services/realEstate/postRealEstate.service";

const postRealEstateController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user = await postRealEstateService();
  return res.status(201).json(user);
};
const getRealEstateController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const users = await getAllRealEstatesService();
  return res.status(200).json(users);
};

export { postRealEstateController, getRealEstateController };
