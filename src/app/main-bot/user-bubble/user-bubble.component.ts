import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-bubble',
  templateUrl: './user-bubble.component.html',
  styleUrls: ['./user-bubble.component.scss']
})
export class UserBubbleComponent implements OnInit {
  @Input() message: String = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
