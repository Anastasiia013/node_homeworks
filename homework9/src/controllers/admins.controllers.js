import * as adminsService from "../services/admins.service.js";
import validateBody from "../utils/validateBody.js";

import { adminAddSchema, adminChangePasswordSchema, adminChangeEmailSchema } from "../validation/usersSheme.js"
import HttpExeption from "../utils/HttpExeption.js";

export const getAllAdmins = async (req, res) => {
    const result = await adminsService.getAdmins();
    res.json(result);
}

export const addAdminController = async (req, res) => {
    await validateBody(adminAddSchema, req.body);
    const result = await adminsService.addAdmin(req.body);

    res.status(201).json({
        message: `Admin with email ${result.email} successfully created`,
    });
};

export const changeAdminPasswordController = async (req, res) => {
    await validateBody(adminChangePasswordSchema, req.body);
    const { id } = req.params;
    const result = await adminsService.changeAdminPassword(id, req.body);
    if (!result) throw HttpExeption(404, `Admin with id=${id} not found`);

    result.mustChangePassword = false;
    await result.save();

    res.json({
        message: "Password change successfully"
    });
};

export const changeAdminEmailController = async (req, res) => {
    await validateBody(adminChangeEmailSchema, req.body);
    const { id } = req.params;
    const result = await adminsService.changeAdminEmail(id, req.body);
    if (!result) throw HttpExeption(404, `Admin with id=${id} not found`);

    res.json({
        message: "Email change successfully"
    });
};

export const deleteAdminController = async (req, res) => {
    const { id } = req.params;
    const result = await adminsService.deleteAdmin(id, req.body);

    res.status(201).json({
        message: `Admin with email ${result.email} is successfully deleted`,
    });
};