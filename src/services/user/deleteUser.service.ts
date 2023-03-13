import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: number) => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({ where: { id: id }, withDeleted: true });

  if (user?.deletedAt !== null) {
    throw new AppError("não é possivel deletar", 666);
  }
  await userRepo.softRemove(user!);
};

export { deleteUserService };
