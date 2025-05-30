import * as fs from "node:fs/promises";
import path from "node:path";

const pathToFile = path.resolve("src", "task2", "info.txt")

export async function createFile() {
    try {
        await fs.writeFile(pathToFile, "Node.js is awesome!");
        console.log("Файл создан: ", pathToFile);
    } catch (error) {
        error.message = "Oшибка создания файла"
        throw error;
    }
}

export async function readFile() {
    try {
        const data = await fs.readFile(pathToFile, "utf-8");
        console.log("Содержимое файла прочитано:", data);
    } catch (error) {
        error.message = "Oшибка чтения файла"
        throw error;
    }
}