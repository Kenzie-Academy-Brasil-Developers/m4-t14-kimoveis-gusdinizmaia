import { Request, Response } from "express";
import { iRealEstate } from "../interfaces/realEstate.interface";
import { getAllRealEstatesService } from "../services/realEstate/getAllRealEstates.service";
import { postRealEstateService } from "../services/realEstate/postRealEstate.service";

const postRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate = req.body;

  const newRealEstate: iRealEstate = await postRealEstateService(realEstate);

  return res.status(201).json(newRealEstate);
};
const getAllRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstates: iRealEstate[] = await getAllRealEstatesService();

  return res.status(200).json(realEstates);
};

export { postRealEstateController, getAllRealEstatesController };
