import { appendFile } from "node:fs/promises";

export async function logMessage(message) {
    const timestamp = new Date().toISOString();
    const fullMessage = `[${timestamp}] ${message}\n`;

    try {
        await appendFile('log.txt', fullMessage);
    } catch (err) {
        console.error('Ошибка записи в файл:', err);
    }
}