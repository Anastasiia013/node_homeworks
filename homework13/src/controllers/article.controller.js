import * as articleServices from "../services/article.service.js";
import validateBody from "../utils/validateBody.js";

import { articleAddValidation, articleUpdateValidation } from "../validation/article.validation.js";
import HttpException from "../utils/HttpException.js";
import Tag from "../db/Tag.js";

export const getArticlesController = async (req, res) => {
    const result = await articleServices.getAtricles();
    res.json(result);
};

export const getArticleBYIdController = async (req, res) => {
    const { id } = req.params;
    const result = await articleServices.getArticleById(id);
    if (!result) throw HttpException(404, `Article with id ${id} not found`);
    res.json(result);
};

export const addArticleController = async (req, res) => {
    await validateBody(articleAddValidation, req.body);
    const result = await articleServices.addArticle(req.body);

    // await Promise.all(payload.tags.map(tagId =>
    //     Tag.findByIdAndUpdate(tagId, {
    //         $addToSet: { articles: article._id }
    //     })
    // ));

    res.json(result);
};

export const updateArticleController = async (req, res) => {
    await validateBody(articleAddValidation, req.body);
    const { id } = req.params;
    const result = await articleServices.updateArticle(id, req.body);
    if (!result) throw HttpException(404, `Article with id ${id} not found`);
    res.json(result);
};

export const deleteArticleController = async (req, res) => {
    const { id } = req.params;
    const result = await articleServices.deleteArticle(id);
    if (!result) throw HttpException(404, `Article with id ${id} nor found`);
    res.json(result);
};