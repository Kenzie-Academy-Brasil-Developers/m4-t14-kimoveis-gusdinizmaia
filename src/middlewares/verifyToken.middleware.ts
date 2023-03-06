import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  return next();
};

export { verifyToken };
