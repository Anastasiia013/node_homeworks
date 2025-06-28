import { Router } from "express";
import {
    addMagazineController,
    deleteMagazineController,
    getAllMagazinesController,
    getSingleMagazineByIdController,
    updateMagazineController
} from "../controllers/magazine.controller.js";

const magazineRouter = Router();

magazineRouter.get("/", getAllMagazinesController);
magazineRouter.get("/:id", getSingleMagazineByIdController);
magazineRouter.post("/", addMagazineController);
magazineRouter.put("/:id", updateMagazineController);
magazineRouter.delete("/:id", deleteMagazineController);

export default magazineRouter;