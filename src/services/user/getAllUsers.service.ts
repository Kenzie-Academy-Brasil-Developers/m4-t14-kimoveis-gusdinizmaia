import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iReturnUser } from "../../interfaces/user.interface";
import { returnUsersSchema } from "../../schemas/user.schema";

const getAllUsersService = async (): Promise<iReturnUser[]> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const users = userRepo.find();

  const returnUsers = returnUsersSchema.parse(users);

  return returnUsers;
};

export { getAllUsersService };
