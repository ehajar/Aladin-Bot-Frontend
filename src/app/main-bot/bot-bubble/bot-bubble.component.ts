import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-bot-bubble',
  templateUrl: './bot-bubble.component.html',
  styleUrls: ['./bot-bubble.component.scss']
})
export class BotBubbleComponent implements OnInit {

   @Input() message: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
