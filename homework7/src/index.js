import "dotenv/config";
import startServer from "./server.js";
import connectToDatabase from "./db/sequelize.js";
import "./db/App.js";

const bootstrap = async () => {
    await connectToDatabase();
    startServer();
}

bootstrap();