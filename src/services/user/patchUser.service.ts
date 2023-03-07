import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iReturnUser, iUserPatch } from "../../interfaces/user.interface";
import { returnUserSchema } from "../../schemas/user.schema";

const patchUserService = async (
  user: iUserPatch,
  id: number
): Promise<iReturnUser> => {
  const repoUser: Repository<User> = AppDataSource.getRepository(User);

  const oldUser = await repoUser.findOneBy({ id: id });

  const newUser = repoUser.create({ ...oldUser, ...user });

  await repoUser.save(newUser);

  return returnUserSchema.parse(newUser);
};

export { patchUserService };
