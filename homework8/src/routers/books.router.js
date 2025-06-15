import { Router } from "express";
import { bookAddSheme, bookUpdateSheme } from "../validation/bookShemas.js";
import Book from "../db/Book.js";

const booksRouter = Router();

booksRouter.get("/", async (req, res) => {
    try {
        const result = await Book.findAll();
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});

booksRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await Book.findByPk(id);
    if (!result) {
        return res.status(404).send({
            message: `Book with id ${id} not found`
        })
    }
    res.json(result);
});

booksRouter.post("/", async (req, res) => {
    try {
        await bookAddSheme.validate(req.body);
        const result = await Book.create(req.body);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

booksRouter.put("/:id", async (req, res) => {
    try {
        await bookUpdateSheme.validate(req.body);
        const id = Number(req.params.id);
        const result = await Book.findByPk(id);
        if (!result) {
            return res.status(404).json({
                message: `Book with id ${id} not found`
            });
        };

        await result.update(req.body, {
            returning: true,
        });

        res.json(result);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
});

booksRouter.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const result = await Book.findByPk(id);
    if (!result) {
        return res.status(404).json({
            message: `Book with id ${id} not found`
        });
    }

    await result.destroy();
    res.json(result);
});


export default booksRouter;