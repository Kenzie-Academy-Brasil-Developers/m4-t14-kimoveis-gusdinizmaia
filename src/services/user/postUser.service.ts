import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iReturnUser, iUserCreate } from "../../interfaces/user.interface";
import { returnUserSchema } from "../../schemas/user.schema";

const postUserService = async (user: iUserCreate): Promise<iReturnUser> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const newUser: iUserCreate = userRepo.create(user);

  await userRepo.save(newUser);

  const userReturn: iReturnUser = returnUserSchema.parse(newUser);

  return userReturn;
};

export { postUserService };
