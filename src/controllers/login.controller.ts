import { Request, Response } from "express";
import { postLoginService } from "../services/login/postLogin.service";

const postLoginController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user = req.body;

  const token = await postLoginService(user);

  return res.status(200).json(token);
};

export { postLoginController };
