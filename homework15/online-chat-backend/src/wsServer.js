import { Server } from "socket.io";
import { createServer } from "node:http";


const startWebsocketServer = () => {
    const httpServer = createServer();

    const wsServer = new Server(httpServer, {
        cors: {
            origin: "*",
        },
    });

    wsServer.on("connection", (socket) => {
        console.log("User connected");

        socket.on("chatMessage", (message) => {
            console.log("Получено сообщение:", message);

            wsServer.emit("newMessage", message);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });

    httpServer.listen(process.env.SOCKET_PORT, () =>
        console.log(`Websocket run on ${process.env.SOCKET_PORT}`)
    );
}

export default startWebsocketServer;

