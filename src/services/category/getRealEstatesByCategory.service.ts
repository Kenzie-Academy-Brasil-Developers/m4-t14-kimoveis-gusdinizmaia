import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iRealEstateByCategory } from "../../interfaces/category.interface";

const getRealEstatesByCategoryService = async (
  id: number
): Promise<iRealEstateByCategory> => {
  const repoCategory: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories = await repoCategory
    .createQueryBuilder("category")
    .select(["category", "realEstate"])
    .innerJoin(
      "category.realEstate",
      "realEstate",
      "realEstate.category = :id",
      { id: id }
    )
    .where("category.id = :categoryId", { categoryId: id })
    .getMany();

  return categories[0];
};

export { getRealEstatesByCategoryService };
