import { NextFunction, Request, Response } from "express";
import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";

const verifyExist =
  (repo: EntityTarget<ObjectLiteral>, name: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const repository: Repository<ObjectLiteral> =
      AppDataSource.getRepository(repo);

    const id = parseInt(req.params.id);

    const find = await repository.findOneBy({ id: id });

    if (!find) {
      throw new AppError(`${name} not found`, 404);
    }

    return next();
  };

export { verifyExist };
