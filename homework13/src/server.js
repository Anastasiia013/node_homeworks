import express from "express";
import cors from "cors";

import publisherRouter from "./routers/publisher.router.js";
import magazineRouter from "./routers/magazine.router.js";
import tagRouter from "./routers/tag.router.js";
import articleRouter from "./routers/article.router.js";

import notFoundHandler from "./middleware/notFoundHandler.js";
import errorHandler from "./middleware/errorHandler.js"

const startServer = () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use("/api/publishers", publisherRouter);
    app.use("/api/magazines", magazineRouter);
    app.use("/api/tags", tagRouter);
    app.use("/api/articles", articleRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT;
    app.listen(port, () => console.log(`Server is running on port ${port}`));
}

export default startServer;
