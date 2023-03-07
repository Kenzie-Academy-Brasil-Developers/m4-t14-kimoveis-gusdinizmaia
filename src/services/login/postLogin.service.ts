import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors/appError";
import { iUserLogin } from "../../interfaces/user.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";

const postLoginService = async (user: iUserLogin) => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({ email: user.email });

  if (!findUser) {
    throw new AppError("user not exist", 404);
  }

  const verifyPassword = await compare(user.password, findUser.password);

  if (!verifyPassword) {
    throw new AppError("não autorizado", 400);
  }

  const token = jwt.sign(
    { email: findUser.email },
    String(process.env.SECRET_KEY),
    { expiresIn: "30m", subject: String(findUser.id) }
  );

  return { token: token };
};

export { postLoginService };
