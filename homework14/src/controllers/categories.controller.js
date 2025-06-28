import * as categoriesService from "../services/categories.service.js";
import validateBody from "../utils/validateBody.js";
import { categoryAddSchema } from "../validation/categories.schema.js";

export const getCategoriesController = async (req, res) => {
  const result = await categoriesService.getCategories();
  res.json(result);
};

export const addCategoryController = async (req, res) => {
  await validateBody(categoryAddSchema, req.body);

  const result = await categoriesService.addCategory({
    payload: req.body,
  });

  res.status(201).json(result);
};