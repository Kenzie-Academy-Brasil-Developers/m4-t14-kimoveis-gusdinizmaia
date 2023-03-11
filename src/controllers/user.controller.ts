import { Request, Response } from "express";
import {
  iReturnUser,
  iReturnUserWithAdmin,
} from "../interfaces/user.interface";
import { deleteUserService } from "../services/user/deleteUser.service";
import { getAllUsersService } from "../services/user/getAllUsers.service";
import { patchUserService } from "../services/user/patchUser.service";
import { postUserService } from "../services/user/postUser.service";

const postUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = req.body;

  const user: iReturnUser | iReturnUserWithAdmin = await postUserService(
    newUser
  );

  return res.status(201).json(user);
};
const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: iReturnUser[] = await getAllUsersService();

  return res.status(200).json(users);
};

const patchUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const updateUser = req.body;
  const id = parseInt(req.params.id);

  const user: iReturnUser = await patchUserService(updateUser, id);

  return res.status(200).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);

  await deleteUserService(id);

  return res.status(204).json();
};

export {
  postUserController,
  getAllUsersController,
  patchUserController,
  deleteUserController,
};
