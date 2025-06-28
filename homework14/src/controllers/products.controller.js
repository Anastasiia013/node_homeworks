import * as productsServices from "../services/products.service.js";
import validateBody from "../utils/validateBody.js";
import { productAddSchema } from "../validation/product.schema.js";

export const addProductController = async (req, res) => {
  await validateBody(productAddSchema, req.body);

  const result = await productsServices.addProduct({ payload: req.body });

  res.status(201).json(result);
};

export const getProductsController = async (req, res) => {
  const result = await productsServices.getProducts();
  res.json(result);
};
