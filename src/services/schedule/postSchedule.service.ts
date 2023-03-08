import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import {
  iSchedule,
  iScheduleCreate,
} from "../../interfaces/schedule.interface";

const postScheduleService = async (
  schedule: iScheduleCreate,
  userId: number
): Promise<iSchedule> => {
  const repoSchedule: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const repoRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate = await repoRealEstate.findOneBy({
    id: schedule.realEstateId,
  });

  const newSchedule = await repoSchedule
    .createQueryBuilder()
    .insert()
    .values([{ ...schedule, user: userId, realEstate: realEstate?.id }])
    .returning("*")
    .execute();

  return newSchedule.raw[0];
};

export { postScheduleService };
