import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iReturnUser, iUserPatch } from "../../interfaces/user.interface";
import { findId } from "../../middlewares/findId.middleware";
import { returnUserSchema } from "../../schemas/user.schema";

const patchUserService = async (
  user: iUserPatch,
  id: number
): Promise<iReturnUser> => {
  const repoUser: Repository<User> = AppDataSource.getRepository(User);

  const oldUser = await findId(User, id, "User");

  const newUser = repoUser.create({ ...oldUser, ...user });

  await repoUser.save(newUser);

  const returnUser = returnUserSchema.parse(newUser);

  return returnUser;
};

export { patchUserService };
