import { Router } from "express";

import {
    getArticlesController,
    getArticleBYIdController,
    addArticleController,
    updateArticleController,
    deleteArticleController
} from "../controllers/article.controller.js";

const articleRouter = Router();

articleRouter.get("/", getArticlesController);
articleRouter.get("/:id", getArticleBYIdController);
articleRouter.post("/", addArticleController);
articleRouter.put("/:id", updateArticleController);
articleRouter.delete("/:id", deleteArticleController);

export default articleRouter;