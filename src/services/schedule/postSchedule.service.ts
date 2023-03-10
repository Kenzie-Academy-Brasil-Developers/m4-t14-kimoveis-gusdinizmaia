import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import {
  iSchedule,
  iScheduleCreate,
} from "../../interfaces/schedule.interface";
import { returnUserSchema } from "../../schemas/user.schema";

const postScheduleService = async (
  schedule: iScheduleCreate,
  userId: number
): Promise<any> => {
  const repoSchedule: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const repoRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const repoUser: Repository<User> = AppDataSource.getRepository(User);

  let user = await repoUser.findOneBy({
    id: userId,
  });

  const realEstate = await repoRealEstate.findOneBy({
    id: schedule.realEstateId,
  });

  const newSchedule = repoSchedule.create({
    ...schedule,
    user: user!,
    realEstate: realEstate!,
  });

  await repoSchedule.save(newSchedule);

  const returnUser = returnUserSchema.parse(user);

  return { ...newSchedule, user: returnUser };
};

export { postScheduleService };
