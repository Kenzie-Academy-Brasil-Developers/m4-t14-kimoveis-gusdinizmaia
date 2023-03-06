import { NextFunction, Request, Response } from "express";
import { EntityTarget, ObjectLiteral } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";

const verifyUniqueKeys =
  (repo: EntityTarget<ObjectLiteral>, key: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const repository = AppDataSource.getRepository(repo);

    const findKey = await repository.findOneBy({ [key]: req.body[key] });

    if (findKey) {
      throw new AppError("The email already exist", 409);
    }

    return next();
  };

export { verifyUniqueKeys };
