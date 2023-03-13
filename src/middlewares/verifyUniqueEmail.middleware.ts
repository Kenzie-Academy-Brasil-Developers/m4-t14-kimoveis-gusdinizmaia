import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors/appError";

const verifyUniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repository: Repository<User> = AppDataSource.getRepository(User);

  const findKey = await repository.findOne({
    where: { email: req.body.email },
    withDeleted: true,
  });

  if (findKey) {
    throw new AppError(`Email already exists`, 409);
  }

  return next();
};

export { verifyUniqueEmail };
