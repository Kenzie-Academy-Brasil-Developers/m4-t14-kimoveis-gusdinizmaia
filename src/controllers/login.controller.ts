import { Request, Response } from "express";
import { postLoginService } from "../services/login/postLogin.service";

const postLoginController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user = await postLoginService();
  return res.status(201).json(user);
};

export { postLoginController };
