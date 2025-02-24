import { Request, Response } from "express";
import { MessageService } from "../services/message.service";

export class MessageController {
  static getMessages(req: Request, res: Response): void {
    res.json(MessageService.getAllMessages());
  }
}