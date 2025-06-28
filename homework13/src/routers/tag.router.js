import { Router } from "express";
import {
    getAllTagsController,
    getSingleTagByIdController,
    addTagController,
    deleteTagController
} from "../controllers/tag.controller.js";

const tagRouter = Router();

tagRouter.get("/", getAllTagsController);
tagRouter.get("/:id", getSingleTagByIdController);
tagRouter.post("/", addTagController);
tagRouter.delete("/:id", deleteTagController);

export default tagRouter;