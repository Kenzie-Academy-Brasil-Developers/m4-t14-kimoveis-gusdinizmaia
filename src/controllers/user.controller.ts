import { Request, Response } from "express";
import { iReturnUser } from "../interfaces/user.interface";
import { deleteUserService } from "../services/user/deleteUser.service";
import { getAllUsersService } from "../services/user/getAllUsers.service";
import { patchUserService } from "../services/user/patchUser.service";
import { postUserService } from "../services/user/postUser.service";

const postUserController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const newUser = req.body;

  const user: iReturnUser = await postUserService(newUser);

  return res.status(201).json(user);
};
const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const users: iReturnUser[] = await getAllUsersService();

  return res.status(200).json(users);
};

const patchUserController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const updateUser = req.body;
  const id = req.user.id;

  const user: iReturnUser = await patchUserService(updateUser, id);

  return res.status(200).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = req.user.id;

  await deleteUserService(id);

  return res.status(204).json();
};

export {
  postUserController,
  getAllUsersController,
  patchUserController,
  deleteUserController,
};
