import * as productsService from "../services/products.service.js";

export const getProductsController = async (req, res) => {
  const result = await productsService.getProducts();

  res.json(result);
};

export const addProductController = async (req, res) => {
  const result = await productsService.addProduct(req.body);

  res.status(201).json(result);
}

export const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.getProductById(id);

  res.status(201).json(result);
}

export const updateProductByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.updateProductById(id, req.body);

  res.status(201).json(result);
}

export const deleteProductByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.deleteProductById(id, req.body);

  res.status(201).json(result);
}