import bcrypt from "bcrypt";

import User from "../db/User.js";
import HttpExeption from "../utils/HttpExeption.js"

export const addUser = async (payload) => {
    const hashPassword = await bcrypt.hash(payload.password, 10);
    return User.create({
        ...payload,
        password: hashPassword
    });
};

export const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    if (user.role !== "user") {
        throw HttpExeption(403, "Only users can be deleted with this method");
    }

    // const passwordCompare = await bcrypt.compare(password, user.password);
    // if (!passwordCompare) throw HttpExeption(400, "Password is incorrect");

    await user.destroy();
    return user;
};