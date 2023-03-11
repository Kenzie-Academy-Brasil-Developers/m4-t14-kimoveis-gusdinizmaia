import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors/appError";
import {
  iRealEstate,
  iRealEstateCreate,
} from "../../interfaces/realEstate.interface";
import { findId } from "../../middlewares/findId.middleware";
import { realEstateCreateSchema } from "../../schemas/realEstate.schema";

const postRealEstateService = async (
  realEstate: iRealEstateCreate
): Promise<iRealEstate> => {
  const repoRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const repoAddress: Repository<Address> = AppDataSource.getRepository(Address);

  const findAddress = await repoAddress.findOneBy(realEstate.address);
  const category = await findId(Category, realEstate.categoryId!, "Category");

  if (findAddress) {
    throw new AppError("Address already exists", 409);
  }

  const newAddress = repoAddress.create(realEstate.address);

  await repoAddress.save(newAddress);

  const newRealEstate = repoRealEstate.create({
    ...realEstate,
    address: newAddress,
    category: category,
  });

  await repoRealEstate.save(newRealEstate);

  return newRealEstate;
};

export { postRealEstateService };
