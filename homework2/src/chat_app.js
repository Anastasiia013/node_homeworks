import EventEmitter from "node:events"

const emitter = new EventEmitter();

function sendMessage(userName, message, emitter) {
    emitter.emit("message", { name: userName, message: message });
}

emitter.on("message", ({name, message}) => {
    console.log(`${name}: ${message}`);
});

sendMessage("Alex", "Hello world", emitter);
sendMessage("Mia", "Hello Alex", emitter);
sendMessage("Anna", "Hello Mia", emitter);
sendMessage("Math", "Hello Anna", emitter);
sendMessage("Max", "Hello Math", emitter);