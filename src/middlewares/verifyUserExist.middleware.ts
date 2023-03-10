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

  const id = parseInt(req.params.id);

  const findKey = await repository.findOneBy({ id: id });

  if (!findKey) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export { verifyUserExist };
