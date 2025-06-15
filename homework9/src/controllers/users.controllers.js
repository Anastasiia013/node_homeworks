import * as usersService from "../services/users.service.js";
import validateBody from "../utils/validateBody.js";

import { userAddSchema, userChangePasswordSchema } from "../validation/usersSheme.js";
import HttpExeption from "../utils/HttpExeption.js";

export const addUserController = async (req, res) => {
    await validateBody(userAddSchema, req.body);
    const result = await usersService.addUser(req.body);

    res.status(201).json({
        message: `New user with email ${result.email} is successfully registered`
    });
};

export const changeUserPasswordController = async (req, res) => {
    await validateBody(userChangePasswordSchema, req.body);
    const { id } = req.params;
    const result = await usersService.changeUserPassword(id, req.body);
    if (!result) throw HttpExeption(404, `User with id=${id} not found`);

    result.mustChangePassword = false;
    await result.save();

    res.json({
        message: "User updated successfully",
    });
};

export const deleteUserController = async (req, res) => {
    const { id } = req.params;
    const result = await usersService.deleteUser(id, req.body);

    res.status(201).json({
        message: `User with email ${result.email} is successfully deleted`,
    });
};