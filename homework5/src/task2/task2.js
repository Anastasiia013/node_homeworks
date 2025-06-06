import express from "express";
import path from "path";
import * as fs from "node:fs/promises";

const app = express();
const pathToFile = path.resolve("src", "task2", "errors.log")

app.use((req, res, next) => {
    try {
        throw new Error("Это тестовая ошибка");
        res.send("OK");
    } catch (error) {
        const log = `${new Date().toDateString()} ${error.message} \n`;
        fs.appendFile(pathToFile, log);
        res.status(500).set("Content-Type", "text/plain").send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});