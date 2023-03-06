import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

const deleteUserService = async (id: number) => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: id });

  await userRepo.softRemove(user!);
};

export { deleteUserService };
