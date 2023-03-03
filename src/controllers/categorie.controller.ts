import { Request, Response } from "express";
import { getCategorieService } from "../services/categorie/getCategorie.service";
import { postCategorieService } from "../services/categorie/postCategorie.service";

const postCategorieController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user = await postCategorieService();
  return res.status(201).json(user);
};
const getCategorieController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const users = await getCategorieService();
  return res.status(200).json(users);
};

export { postCategorieController, getCategorieController };
