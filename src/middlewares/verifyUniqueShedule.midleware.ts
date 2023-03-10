import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";
import { AppError } from "../errors/appError";

const verifyUniqueShedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repoSchedule: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const findSchedule = await repoSchedule
    .createQueryBuilder("schedule")
    .select(["realEstate", "schedule"])
    .innerJoin(
      "schedule.realEstate",
      "realEstate",
      "realEstate.id = :realEstateId",
      { realEstateId: req.body.realEstateId }
    )
    .where("schedule.hour = :hour AND schedule.date = :date", {
      hour: req.body.hour,
      date: req.body.date,
    })
    .getCount();

  if (findSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};

export { verifyUniqueShedule };
