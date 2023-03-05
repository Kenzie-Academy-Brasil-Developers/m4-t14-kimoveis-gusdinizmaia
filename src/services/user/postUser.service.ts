import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  iReturnUserCreate,
  iUserCreate,
} from "../../interfaces/user.interface";
import { returnUserCreate } from "../../schemas/user.schema";

const postUserService = async (
  user: iUserCreate
): Promise<iReturnUserCreate> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const newUser: iUserCreate = userRepo.create(user);

  await userRepo.save(newUser);

  const userReturn: iReturnUserCreate = returnUserCreate.parse(newUser);

  return userReturn;
};

export { postUserService };
