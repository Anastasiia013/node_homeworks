import Article from "../db/Article.js";

export const getAtricles = () => Article.find();

export const getArticleById = (id) => Article.findById(id);

export const addArticle = (payload) => Article.create(payload);

export const updateArticle = (id, payload) => Article.findByIdAndUpdate(id, payload, { new: true });

export const deleteArticle = (id) => Article.findByIdAndDelete(id);