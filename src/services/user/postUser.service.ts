import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  iReturnUser,
  iReturnUserWithAdmin,
  iUserCreate,
} from "../../interfaces/user.interface";
import {
  returnUserWithAdmin,
  returnUserWithoutAdmin,
} from "../../schemas/user.schema";

const postUserService = async (
  user: iUserCreate
): Promise<iReturnUser | iReturnUserWithAdmin> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const newUser: iUserCreate = userRepo.create(user);

  await userRepo.save(newUser);

  const schema = user.admin ? returnUserWithoutAdmin : returnUserWithAdmin;

  const userReturn: iReturnUser | iReturnUserWithAdmin = schema.parse(newUser);

  return userReturn;
};

export { postUserService };
