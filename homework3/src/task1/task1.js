import * as fs from "node:fs/promises";
import path from "node:path";

const pathToDir = path.resolve("src", "task1", "myFolder");

export async function createFolder() {
    try {
        await fs.mkdir(pathToDir);
        console.log("Каталог создан:", pathToDir);
    } catch (error) {
        if (error.code === "EEXIST") {
            console.log("Каталог уже существует:", pathToDir);
        } else {
            error.message = "Ошибка создания каталога"
            throw error;
        }
    }
}

export async function deleteFolder() {
    try {
        await fs.rmdir(pathToDir);
        console.log("Каталог удален.");
    } catch (error) {
        error.message = "Ошибка удаления каталога."
        throw error;
    }
}