import { Router } from "express";

import { loginController, refreshTokenController } from "../controllers/auth.controller.js";

const authRouter = Router();

// signin
authRouter.post("/login", loginController);

// refresh token
authRouter.post("/refresh-token", refreshTokenController);

export default authRouter;