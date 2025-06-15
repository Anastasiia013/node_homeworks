import { Router } from "express";
import { addUserController, changeUserPasswordController, deleteUserController } from "../controllers/users.controllers.js";
import { authenticate, isAdmin } from "../middlewares/authorization.js";
import { checkMustChangePassword } from "../middlewares/mustChangePassword.js";

const usersRouter = Router();

usersRouter.post("/users", addUserController);
usersRouter.put("/users/:id/password", authenticate, changeUserPasswordController);
usersRouter.post("/users/change-password", authenticate, checkMustChangePassword, changeUserPasswordController);
usersRouter.delete("/users/:id", authenticate, isAdmin, deleteUserController)

export default usersRouter;