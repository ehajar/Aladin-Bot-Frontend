export default class ChatMessage {
  message: String;
  date: Date;
  isSenderBot: boolean;

  constructor(msg: string, sender: boolean) {
    this.message = msg;
    this.date = new Date();
    this.isSenderBot = sender
  }

}
