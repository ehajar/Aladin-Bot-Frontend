import {Component, OnInit, ViewChild} from '@angular/core';
import {MainBotComponent} from "../main-bot/main-bot.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  isShown = false;

  carouselImages = [1, 2, 3, 4, 5, 6, 7];
  imageIndex = 0;

  @ViewChild(MainBotComponent) child: MainBotComponent | undefined;

  showHideBox() {
    this.isShown = !this.isShown;
    this.child?.resetBotData();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % 7;
    }, 1300);
  }




}
