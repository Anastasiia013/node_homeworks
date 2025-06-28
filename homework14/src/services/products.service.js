import Product from "../db/Product.js";

export const addProduct = async ({ payload }) => {
  const product = new Product(payload);
  return await product.save();
};

export const getProducts = async () => {
  return await Product.find().populate("category", "name");
};

