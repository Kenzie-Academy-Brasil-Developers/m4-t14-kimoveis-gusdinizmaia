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
    throw new AppError("Invalid credentials", 401);
  }

  const verifyPassword = await compare(user.password, findUser.password);

  if (!verifyPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    { admin: findUser.admin },
    String(process.env.SECRET_KEY!),
    { expiresIn: process.env.EXPIRES_IN, subject: String(findUser.id) }
  );

  return { token: token };
};

export { postLoginService };
