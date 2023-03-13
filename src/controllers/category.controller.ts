import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import {
  iCategory,
  iRealEstateByCategory,
} from "../interfaces/category.interface";
import { getAllCategoriesService } from "../services/category/getAllCategories.service";
import { getRealEstatesByCategoryService } from "../services/category/getRealEstatesByCategory.service";
import { postCategoryService } from "../services/category/postCategory.service";

const postCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const category = req.body;

  const newCategory: iCategory = await postCategoryService(category);

  return res.status(201).json(newCategory);
};

const getAllCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: iCategory[] = await getAllCategoriesService();

  return res.status(200).json(categories);
};

const getRealEstatesByCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);

  const categories: iRealEstateByCategory =
    await getRealEstatesByCategoryService(id);
  return res.status(200).json(categories);
};

export {
  postCategoryController,
  getAllCategoriesController,
  getRealEstatesByCategoryController,
};
