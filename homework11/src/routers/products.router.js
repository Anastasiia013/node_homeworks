import { Router } from "express";

import {
    getProductsController,
    getProductByIdController,
    deleteProductByIdController,
    addProductController,
    updateProductByIdController
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.get("/", getProductsController);
productsRouter.get("/:id", getProductByIdController)
productsRouter.post("/", addProductController);
productsRouter.put("/:id", updateProductByIdController);
productsRouter.delete("/:id", deleteProductByIdController)

export default productsRouter;