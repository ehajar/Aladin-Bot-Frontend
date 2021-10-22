import {Component, ViewChild} from '@angular/core';
import {MainBotComponent} from "./main-bot/main-bot.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AladinBot';

  isShown = false;

  @ViewChild(MainBotComponent) child: MainBotComponent | undefined;

  showHideBox() {
    this.isShown = !this.isShown;
    this.child?.resetBotData();
  }



}
