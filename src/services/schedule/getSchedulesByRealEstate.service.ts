import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";
import { iSchedule } from "../../interfaces/schedule.interface";

const getSchedulesByRealEstateService = async (
  id: number
): Promise<iSchedule[]> => {
  const repoSchedule: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const schedules = await repoSchedule
    .createQueryBuilder("schedule")
    .select()
    .innerJoin("schedule.realEstate", "realEstate", "realEstate.id = :id", {
      id: id,
    })
    .getRawMany();

  return schedules;
};

export { getSchedulesByRealEstateService };
