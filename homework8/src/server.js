import express from "express";
import cors from "cors";

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // app.use("/api/apps", categoriesRouter);
    
    // app.use(notFoundHandler);
    // app.use(errorHandler);

    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log("Server is running on port 3000")
    )
}

export default startServer;