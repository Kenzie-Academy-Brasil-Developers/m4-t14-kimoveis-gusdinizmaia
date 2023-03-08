// import { NextFunction, Request, Response } from "express";
// import { Repository } from "typeorm";
// import { AppDataSource } from "../data-source";
// import { Address, User } from "../entities";
// import { AppError } from "../errors/appError";

// const verifyAddressExist = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const repository: Repository<Address> = AppDataSource.getRepository(Address);

//   const address = req.body.address

//   const findKey = await repository.findOneBy({ id: id });

//   if (!findKey) {
//     throw new AppError("The address already exist", 404);
//   }

//   return next();
// };

// export { verifyAddressExist };
