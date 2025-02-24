import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { Application } from "express";
import { MessageService } from "../services/message.service";

export function initializeSocketServer(app: Application) {
  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: Socket) => {
    console.log(`Usuario conectado: ${socket.id}`);

    socket.on("chatMessage", (msg: string, username: string) => {
      if (!msg || !username) return;
      const message = MessageService.saveMessage(socket.id, username, msg);
      io.emit("chatMessage", message);
    });

    socket.on("disconnect", () => {
      console.log(`Usuario desconectado: ${socket.id}`);
    });

    socket.on("error", (err) => {
      console.error("Error en socket:", err);
    });
  });

  return server;
}
