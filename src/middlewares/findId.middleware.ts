import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";

const findId = async (
  repo: EntityTarget<ObjectLiteral>,
  id: number,
  messageError: string
) => {
  const repository: Repository<any> = AppDataSource.getRepository(repo);

  const searchId = await repository.findOneBy({ id: id });

  if (!searchId) {
    throw new AppError(messageError, 404);
  }

  return searchId;
};

export { findId };
