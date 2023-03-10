import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { findId } from "../../middlewares/findId.middleware";

const deleteUserService = async (id: number) => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await findId(User, id, "User");

  await userRepo.softRemove(user!);
};

export { deleteUserService };
