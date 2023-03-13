import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const verifyDayAndHour = (req: Request, res: Response, next: NextFunction) => {
  const daysForWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const hoursForDay = {
    min: new Date().setHours(8, 0, 0),
    max: new Date().setHours(18, 0, 0),
  };

  const day = new Date(req.body.date).getDay();

  let hour = req.body.hour.split(":");
  hour = new Date().setHours(hour[0], hour[1], 0);

  if (day === 0 || day === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  } else if (hour >= hoursForDay.max || hour <= hoursForDay.min) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }
  return next();
};

export { verifyDayAndHour };
