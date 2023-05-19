import express, { Express, Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { roomHandler } from "./room";

const app = express();
app.use(cors);
const port = 8089
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");
    roomHandler(socket);
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});
server.get("/", (req: Request, res: Response) => {
  res.send("<h1>Nhiệt liệt chào mừng quý vị đại coder!</h1>");
});


server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
