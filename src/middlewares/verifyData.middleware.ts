import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

const verifyData =
  (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const newData = schema.parse(req.body);
    req.body = newData;

    return next();
  };

export { verifyData };
