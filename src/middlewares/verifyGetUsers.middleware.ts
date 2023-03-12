import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const verifyGetUsers = (req: Request, res: Response, next: NextFunction) => {
  const admin = req.user.admin;

  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { verifyGetUsers };
