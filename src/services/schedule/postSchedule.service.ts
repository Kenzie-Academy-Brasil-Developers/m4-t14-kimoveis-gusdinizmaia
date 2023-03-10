import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { iScheduleCreate } from "../../interfaces/schedule.interface";
import { findId } from "../../middlewares/findId.middleware";
import { returnUserSchema } from "../../schemas/user.schema";

const postScheduleService = async (
  schedule: iScheduleCreate,
  userId: number
): Promise<any> => {
  const repoSchedule: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  let user = await findId(User, userId, "User");

  const realEstate = await findId(
    RealEstate,
    schedule.realEstateId,
    "RealEstate"
  );

  const newSchedule = repoSchedule.create({
    ...schedule,
    user: user!,
    realEstate: realEstate!,
  });

  await repoSchedule.save(newSchedule);

  return { message: "Schedule created" };
};

export { postScheduleService };
