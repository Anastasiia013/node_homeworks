import { Router } from "express";

import {
    addAdminController,
    changeAdminPasswordController,
    changeAdminEmailController,
    deleteAdminController,
    changeAdminRoleController,
} from "../controllers/users.controller.js";

import { authenticate, isSuperadmin, isAdmin, isUser } from "../middlewares/authorization.js";

const usersRouter = Router();

usersRouter.post("/admins", authenticate, isSuperadmin, addAdminController);

usersRouter.put("/admins/:id/update-password", authenticate, isSuperadmin, changeAdminPasswordController);

usersRouter.put("/admins/:id/update-email", authenticate, isSuperadmin, changeAdminEmailController);

usersRouter.put("/admins/update-role", authenticate, isSuperadmin, changeAdminRoleController);

usersRouter.delete("/admins/:id", authenticate, isSuperadmin, deleteAdminController);

export default usersRouter;