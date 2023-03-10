import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import {
  iRealEstate,
  iRealEstateCreate,
} from "../../interfaces/realEstate.interface";

const postRealEstateService = async (
  realEstate: iRealEstateCreate
): Promise<iRealEstate> => {
  const repoRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const repoAddress: Repository<Address> = AppDataSource.getRepository(Address);
  const repoCategory: Repository<Category> =
    AppDataSource.getRepository(Category);

  const newAddress = repoAddress.create(realEstate.address);

  await repoAddress.save(newAddress);

  const category = await repoCategory.findOneBy({
    id: realEstate?.categoryId,
  });

  const newRealEstate = await repoRealEstate
    .createQueryBuilder()
    .insert()
    .values([{ ...realEstate, address: newAddress, category: category! }])
    .returning("*")
    .execute();

  return newRealEstate.raw[0];
};

export { postRealEstateService };
