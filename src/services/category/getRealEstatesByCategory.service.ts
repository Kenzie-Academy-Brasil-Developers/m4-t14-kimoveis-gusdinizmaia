import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iCategory } from "../../interfaces/category.interface";

const getRealEstatesByCategoryService = async (
  id: number
): Promise<iCategory[]> => {
  const repoCategory: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories = repoCategory.find({
    where: { id: id },
    relations: { realEstates: true },
  });

  // const categories = await repoCategory.createQueryBuilder()
  // .select([]).innerJoin('categories', 'c').innerJoin('real_estates', 're')
  // .where('re.category = :id', {id: id})

  return categories;
};

export { getRealEstatesByCategoryService };
