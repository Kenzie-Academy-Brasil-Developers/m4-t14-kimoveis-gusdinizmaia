import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors/appError";
import { iUser } from "../interfaces/user.interface";

const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const idUser = req.user.id;

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: idUser });

  if (!user?.admin) {
    throw new AppError("não é admin", 400);
  }
};

export { verifyAdmin };
