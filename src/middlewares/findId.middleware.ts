import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";

const findId = async (
  repo: EntityTarget<ObjectLiteral>,
  id: number,
  name: string
): Promise<any> => {
  const repository: Repository<ObjectLiteral> =
    AppDataSource.getRepository(repo);

  const searchId = await repository.findOneBy({ id: id });

  if (!searchId) {
    throw new AppError(`${name} not found`, 404);
  }

  return searchId;
};

export { findId };
