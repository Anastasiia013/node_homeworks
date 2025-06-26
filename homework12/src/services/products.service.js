import Product from "../db/Product.js";

export const getProducts = () => Product.find();

export const addProduct = payload => Product.create(payload);

export const getProductById = _id => Product.findById({ _id });

export const updateProductById = (id, payload) => Product.findByIdAndUpdate(id, payload, {new: true});

export const deleteProductById = (id) => Product.findByIdAndDelete(id);