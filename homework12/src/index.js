import "dotenv/config";

import connectDatabase from "./db/connectToDatabase.js";
import startServer from "./server.js";

const bootstrap = async()=> {
    await connectDatabase(); 
    startServer();
}

bootstrap(); 