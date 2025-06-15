import bcrypt from "bcrypt";

import User from "../db/User.js";
import HttpExeption from "../utils/HttpExeption.js"

export const getAdmins = async () => {
    const admins = await User.findAll({
        where: { role: "admin" }
    });
    return admins;
};

export const addAdmin = async (payload) => {
    const hashPassword = await bcrypt.hash(payload.password, 10);
    return User.create({
        ...payload,
        password: hashPassword,
        role: "admin",
    });
};

export const changeAdminPassword = async (id, { oldPassword, newPassword }) => {
    const admin = await User.findByPk(id);
    if (!admin) return null;

    const passwordCompare = await bcrypt.compare(oldPassword, admin.password);
    if (!passwordCompare) throw HttpExeption(400, "Old password invalid");

    const hashPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashPassword;
    await admin.save();

    return admin;
}

export const changeAdminEmail = async (id, { password, newEmail }) => {
    const admin = await User.findByPk(id);
    if (!admin) return null;

    const passwordCompare = await bcrypt.compare(password, admin.password);
    if (!passwordCompare) throw HttpExeption(400, "Password is incorrect");

    admin.email = newEmail;
    await admin.save();

    return admin;
};

export const deleteAdmin = async (id, { password }) => {
    const admin = await User.findByPk(id);
    if (!admin) return null;

    if (admin.role !== "admin") {
        throw HttpExeption(403, "Only admins can be deleted with this method");
    }

    const passwordCompare = await bcrypt.compare(password, admin.password);
    if (!passwordCompare) throw HttpExeption(400, "Password is incorrect");

    await admin.destroy();
    return admin;
};