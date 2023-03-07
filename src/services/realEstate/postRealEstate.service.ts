import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import {
  iRealEstate,
  iRealEstateCreate,
} from "../../interfaces/realEstate.interface";

const postRealEstateService = async (
  realEstate: iRealEstateCreate
): Promise<iRealEstate> => {
  const repoRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const newRealEstate = repoRealEstate.create(realEstate);

  await repoRealEstate.save(newRealEstate);

  return newRealEstate;
};

export { postRealEstateService };
