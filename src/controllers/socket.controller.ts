import { Server, Socket } from "socket.io";
import { MessageService } from "../services/message.service";

export class SocketController {
  static configureSockets(io: Server): void {
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
  }
}
