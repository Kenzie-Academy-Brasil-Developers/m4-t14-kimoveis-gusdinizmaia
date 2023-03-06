import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  const admin = req.user.admin;

  if (!admin) {
    throw new AppError("não é admin", 400);
  }
};

export { verifyAdmin };
