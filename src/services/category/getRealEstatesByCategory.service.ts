import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iCategory } from "../../interfaces/category.interface";

const getRealEstatesByCategoryService = async (
  id: number
): Promise<iCategory[]> => {
  const repoCategory: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories = await repoCategory
    .createQueryBuilder("category")
    .select(["realEstate", "category"])
    .innerJoin(
      "category.realEstates",
      "realEstate",
      "realEstate.categoryId = :id",
      { id: id }
    )
    .getMany();

  return categories;
};

export { getRealEstatesByCategoryService };
