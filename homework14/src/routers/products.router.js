import { Router } from "express";
import { addProductController, getProductsController } from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", addProductController);
productsRouter.get("/", getProductsController);

export default productsRouter;
