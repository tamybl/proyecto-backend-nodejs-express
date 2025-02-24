import { Message } from "../interfaces/message.interface";
import { MessageModel } from "../models/message.model";

export class MessageService {
  static saveMessage(id: string, username: string, text: string): Message {
    const message: Message = {
      id,
      username,
      text,
      timestamp: new Date().toISOString(),
    };
    MessageModel.addMessage(message);
    return message;
  }

  static getAllMessages(): Message[] {
    return MessageModel.getMessages();
  }
}
