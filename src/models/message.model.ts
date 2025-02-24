import { Message } from "../interfaces/message.interface";

export class MessageModel {
  private static messages: Message[] = [];

  static addMessage(message: Message): void {
    this.messages.push(message);
  }

  static getMessages(): Message[] {
    return this.messages;
  }
}
