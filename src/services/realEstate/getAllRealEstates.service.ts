import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { iRealEstate } from "../../interfaces/realEstate.interface";

const getAllRealEstatesService = async (): Promise<iRealEstate[]> => {
  const repoRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstates = await repoRealEstate.find();

  return realEstates;
};

export { getAllRealEstatesService };
