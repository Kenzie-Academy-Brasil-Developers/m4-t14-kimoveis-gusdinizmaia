import { NextFunction, Request, Response } from "express";
import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";

const verifyUniqueKey =
  (repo: EntityTarget<ObjectLiteral>, key: string, name: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const repository: Repository<ObjectLiteral> =
      AppDataSource.getRepository(repo);

    const findKey = await repository.findOneBy({ [key]: req.body[key] });

    if (findKey) {
      throw new AppError(`${name} already exists`, 409);
    }

    return next();
  };

export { verifyUniqueKey };
