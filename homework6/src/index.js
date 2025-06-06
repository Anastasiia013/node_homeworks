import "dotenv/config";

import { connectToDatabase } from "./sequelize.js";
import startServer from "./server.js";

const bootstrap = async () => {
    await connectToDatabase();
    startServer();
};

bootstrap();