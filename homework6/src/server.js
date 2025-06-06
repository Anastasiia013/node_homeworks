import express from "express";
import cors from "cors";
import { productAddSheme } from "./productSheme.js";
import Product from "./Product.js";

const startServer = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/api/products", async (req, res) => {
        const result = await Product.findAll();
        res.json(result);
    });

    app.get("/api/products/:id", async (req, res) => {
        const id = Number(req.params.id);
        const result = await Product.findByPk(id);
        if (!result) {
            return res.status(404).send({
                message: `product with id ${id} not found`
            })
        }
        res.json(result);
    });

    app.post("/api/products", async (req, res) => {
        try {
            await productAddSheme.validate(req.body);
            const result = await Product.create(req.body);
            res.status(201).json(result)
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: error.message
            });
        }
    });

    const port = process.env.PORT;
    app.listen(port, () => console.log("Server running on port 3000"))
};

export default startServer;