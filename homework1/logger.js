const fs = require('fs');

function logMessage(message) {
    const timestamp = new Date().toISOString();
    const fullMessage = `[${timestamp}] ${message}\n`;

    fs.appendFile('log.txt', fullMessage, (err) => {
        if (err) {
            console.error('Ошибка при записи в лог:', err);
        }
    });
}

module.exports = { logMessage };