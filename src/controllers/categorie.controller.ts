import { Request, Response } from "express";
import { getRealEstatesByCategorieService } from "../services/categorie/getRealEstatesByCategorie.service";
import { postCategorieService } from "../services/categorie/postCategorie.service";

const postCategorieController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user = await postCategorieService();
  return res.status(201).json(user);
};
const getRealEstatesByCategorieController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const users = await getRealEstatesByCategorieService();
  return res.status(200).json(users);
};

export { postCategorieController, getRealEstatesByCategorieController };
