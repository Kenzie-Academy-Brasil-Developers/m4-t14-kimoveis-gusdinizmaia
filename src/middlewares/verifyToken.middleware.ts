import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing Bearer Token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, String(process.env.SECRET_KEY!), (err, decoded: any) => {
    if (err) {
      throw new AppError("token invalido", 400);
    }

    req.user = { id: Number(decoded.sub) };
  });

  return next();
};

export { verifyToken };
