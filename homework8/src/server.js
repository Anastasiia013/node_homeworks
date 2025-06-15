import express from "express";
import cors from "cors";
import booksRouter from "./routers/books.router.js";

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api/books", booksRouter);

    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log("Server is running on port 3000")
    )
}

export default startServer;