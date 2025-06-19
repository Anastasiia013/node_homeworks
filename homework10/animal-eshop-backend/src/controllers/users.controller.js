import * as usersService from "../services/users.service.js";

import validateBody from "../utils/validateBody.js";
import { adminAddSchema, adminChangePasswordSchema, adminChangeEmailSchema, changeRoleSchema } from "../validation/users.schema.js";
import HttpExeption from "../utils/HttpExeption.js";

export const addAdminController = async (req, res) => {
  await validateBody(adminAddSchema, req.body);
  const result = await usersService.addAdmin(req.body);

  res.status(201).json({
    message: `user with email ${result.email} registered`,
  });
};

export const changeAdminPasswordController = async (req, res) => {
  await validateBody(adminChangePasswordSchema, req.body);
  const { id } = req.params;
  const result = await usersService.changeAdminPassword(id, req.body);
  if (!result) throw HttpExeption(404, `Admin with id=${id} not found`);

  res.json({
    message: "Password change successfully"
  });
}

export const changeAdminEmailController = async (req, res) => {
  await validateBody(adminChangeEmailSchema, req.body);
  const { id } = req.params;
  const result = await usersService.changeAdminEmail(id, req.body);
  if (!result) throw HttpExeption(404, `Admin with id=${id} not found`);

  res.json({
    message: "Email change successfully"
  });
};

export const deleteAdminController = async (req, res) => {
  const { id } = req.params;
  const result = await usersService.deleteAdmin(id, req.body);

  res.status(201).json({
    message: `Admin with email ${result.email} is successfully deleted`,
  });
};

export const changeAdminRoleController = async (req, res) => {
  await validateBody(changeRoleSchema, req.body);
  const { id, newRole } = req.body;

  const user = await usersService.changeUserRole(id, newRole);
  if (!user) {
    throw HttpExeption(404, `User with id=${id} not found`);
  }

  res.json({
    message: `Role updated successfully`,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
  });
};