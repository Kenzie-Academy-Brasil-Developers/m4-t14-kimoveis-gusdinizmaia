import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

const getSchedulesByRealEstateService = async (id: number): Promise<any> => {
  const repoRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstates = await repoRealEstate
    .createQueryBuilder("realEstate")
    .select(["address", "category", "schedule", "realEstate", "user"])
    .innerJoin(
      "realEstate.schedules",
      "schedule",
      "schedule.realEstate = :id",
      {
        id: id,
      }
    )
    .leftJoin("schedule.user", "user", "schedule.user = user.id")
    .leftJoin("realEstate.address", "address")
    .leftJoin("realEstate.category", "category")
    .getMany();

  return realEstates[0];
};

export { getSchedulesByRealEstateService };
