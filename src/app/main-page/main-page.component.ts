import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import ChatMessage from "../Models/ChatMessage";
import ServiceHelper from "../services/ServiceHelper";
import LangModel from "../languages/LangModel";
import {HttpClient} from "@angular/common/http";
import getMyLanguage from "../languages/MyLanguage";
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
