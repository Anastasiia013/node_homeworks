import { Router } from "express";
import { addAdminController, changeAdminPasswordController, changeAdminEmailController, getAllAdmins, deleteAdminController } from "../controllers/admins.controllers.js";
import { authenticate, isSuperadmin, isAdmin } from "../middlewares/authorization.js";

const adminsRouter = Router();

adminsRouter.get("/admins", authenticate, isAdmin, getAllAdmins);
adminsRouter.post("/admins", authenticate, isSuperadmin, addAdminController);
adminsRouter.put("/admins/:id/password", authenticate, isSuperadmin, changeAdminPasswordController);
adminsRouter.put("/admins/:id/email", authenticate, isSuperadmin, changeAdminEmailController)
adminsRouter.delete("/admins/:id", authenticate, isSuperadmin, deleteAdminController)

export default adminsRouter;