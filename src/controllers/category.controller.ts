import { Request, Response } from "express";
import { getRealEstatesByCategoryService } from "../services/category/getRealEstatesByCategory.service";
import { postCategoryService } from "../services/category/postCategory.service";

const postCategoryController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user = await postCategoryService();
  return res.status(201).json(user);
};
const getRealEstatesByCategoryController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const users = await getRealEstatesByCategoryService();
  return res.status(200).json(users);
};

export { postCategoryController, getRealEstatesByCategoryController };
