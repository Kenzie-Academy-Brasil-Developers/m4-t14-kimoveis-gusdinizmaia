import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iCategory } from "../../interfaces/category.interface";

const getAllCategoriesService = async (): Promise<iCategory[]> => {
  const repoCategory: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories = await repoCategory.find();

  return categories;
};

export { getAllCategoriesService };
