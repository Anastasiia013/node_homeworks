import * as authService from "../services/auth.service.js";

import validateBody from "../utils/validateBody.js";

import { loginSchema } from "../validation/auth.schema.js";

export const loginController = async (req, res) => {
    await validateBody(loginSchema, req.body);
    const token = await authService.login(req.body);

    res.json({ token });
}

export const refreshTokenController = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw HttpExeption(401, "Authorization header missing");

    const [type, token] = authHeader.split(" ");
    if (type !== "Bearer" || !token) throw HttpExeption(401, "Invalid token format");

    const newToken = authService.refreshToken(token);

    res.json({ token: newToken });
};
