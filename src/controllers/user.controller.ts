import { Request, Response } from "express";
import { deleteUserService } from "../services/user/deleteUser.service";
import { getAllUsersService } from "../services/user/getAllUsers.service";
import { patchUserService } from "../services/user/patchUser.service";
import { postUserService } from "../services/user/postUser.service";

const postUserController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user = await postUserService();
  return res.status(201).json(user);
};
const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const users = await getAllUsersService();
  return res.status(200).json(users);
};

const patchUserController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user = await patchUserService();
  return res.status(200).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<any> => {
  await deleteUserService();
  return res.status(204).json();
};

export {
  postUserController,
  getAllUsersController,
  patchUserController,
  deleteUserController,
};
