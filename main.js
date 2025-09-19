import { configDotenv } from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { WebSocketServer } from "ws";
import {getRandomMessage} from "./util.js";

async function main() {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    configDotenv({
        path: join(__dirname, ".env"),
        quiet: true,
    });

    const { default: app } = await import("./app.js");

    app.listen(+process.env.BACKEND_PORT, process.env.BACKEND_HOST, () => {
        console.log(
            `Start listing at host ${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}`
        );
    });

    // Starts the webscket server
    const wss = new WebSocketServer({ port: 7800 });
    let clients = new Map(); // store clients by ID

    wss.on("connection", (ws) => {
        const clientId = Date.now(); // or use UUIDs
        clients.set(clientId, ws); // save the ws object to send message for that user later

        console.log(`Client ${clientId} connected`);

        ws.on("message", (msg) => {
            // Send directly an image
            ws.send(JSON.stringify(getRandomMessage()))
        });

        ws.on("close", () => {
            clients.delete(clientId);
            console.log(`Client ${clientId} disconnected`);
        });
    });
}

main();
