import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  iCategory,
  iCreateCategory,
} from "../../interfaces/category.interface";

const postCategoryService = async (
  category: iCreateCategory
): Promise<iCategory> => {
  const repoCategory: Repository<Category> =
    AppDataSource.getRepository(Category);

  const newCategory = repoCategory.create(category);

  await repoCategory.save(newCategory);

  return newCategory;
};

export { postCategoryService };
