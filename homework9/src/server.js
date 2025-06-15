import express from "express";
import cors from "cors";

import usersRouter from "./routers/users.router.js";
import adminsRouter from "./routers/admins.router.js";
import authRouter from "./routers/auth.router.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api/auth", authRouter);
    app.use("/api", usersRouter);
    app.use("/api", adminsRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server is running on port ${port}`));
};

export default startServer;
