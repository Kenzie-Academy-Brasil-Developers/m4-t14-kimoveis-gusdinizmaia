import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "./appError";

const handleError = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      message: err.flatten().fieldErrors,
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
};

export { handleError };
