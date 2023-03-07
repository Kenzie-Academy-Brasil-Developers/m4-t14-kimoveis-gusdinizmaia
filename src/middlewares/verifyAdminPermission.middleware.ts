import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors/appError";

const verifyAdminPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idUser = req.user.id;
  const idUserUpdate = parseInt(req.params.id);

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: idUser });

  if (!user?.admin && idUser !== idUserUpdate) {
    throw new AppError("não é admin pra fazer isso", 400);
  }

  return next();
};

export { verifyAdminPermission };
