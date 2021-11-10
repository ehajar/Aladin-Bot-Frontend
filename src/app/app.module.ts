import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBotComponent } from './main-bot/main-bot.component';
import  {BotBubbleComponent} from "./main-bot/bot-bubble/bot-bubble.component"
import { UserBubbleComponent } from './main-bot/user-bubble/user-bubble.component';
import { BubbleComponent } from './main-bot/bubble/bubble.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { LoadingBubblesComponent } from './main-bot/loading-bubbles/loading-bubbles.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './admin/admin.component';
import {AdminService} from "./services/admin.service";
import {ServiceHelper} from "./services/service-helper.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    MainBotComponent,
    BotBubbleComponent,
    UserBubbleComponent,
    BubbleComponent,
    LoadingBubblesComponent,
    MainPageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    AdminService,
    ServiceHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
