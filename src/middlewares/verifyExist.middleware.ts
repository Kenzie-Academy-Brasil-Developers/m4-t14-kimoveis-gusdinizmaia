import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors/appError";

const verifyUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repository: Repository<User> = AppDataSource.getRepository(User);

  const findKey = await repository.findOneBy({ id: req.user.id });

  if (!findKey) {
    throw new AppError("The user not exist", 404);
  }

  return next();
};

export { verifyUserExist };
