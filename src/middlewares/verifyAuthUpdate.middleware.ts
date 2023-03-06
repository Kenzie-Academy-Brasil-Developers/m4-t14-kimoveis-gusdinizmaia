import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const verifyAuthUpdate = (req: Request, res: Response, next: NextFunction) => {
  const admin = req.user.admin;
  const idUser = req.user.id;
  const idUserUpdate = parseInt(req.params.id);

  if (!admin && idUser !== idUserUpdate) {
    throw new AppError("não é admin pra fazer isso", 400);
  }

  return next();
};

export { verifyAuthUpdate };
