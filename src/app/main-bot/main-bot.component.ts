import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import ChatMessage from "../Models/ChatMessage";

@Component({
  selector: 'app-main-bot',
  templateUrl: './main-bot.component.html',
  styleUrls: ['./main-bot.component.scss']
})
export class MainBotComponent implements OnInit {

    chatMessages : Array<ChatMessage> = [];

  constructor() {
    this.chatMessages.push(new ChatMessage("Hello",false));
    this.chatMessages.push(new ChatMessage("Hello",true));
    this.chatMessages.push(new ChatMessage("Hello",false));
    this.chatMessages.push(new ChatMessage("Hello",true));
    this.chatMessages.push(new ChatMessage("Hello",false));
  }

  @Input() isShown: boolean = false;


  ngOnInit(): void {
  }


}
