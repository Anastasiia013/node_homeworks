import { writeFile, readFile } from "node:fs/promises";
import "dotenv/config";
import path from "path";

const filename = process.env.FILENAME;
const pathToFile = path.resolve("src", filename);

try {
    await writeFile(pathToFile, "Hello world!");
    const content = await readFile(pathToFile, "utf-8");
    console.log(content);
} catch (err) {
    console.error("Error reading file:", err);
}