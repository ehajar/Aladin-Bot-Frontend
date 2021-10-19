import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {

  @Input() isBot: boolean = true;
  @Input() message: String ="";


  constructor() {
  }

  ngOnInit(): void {
  }


}
