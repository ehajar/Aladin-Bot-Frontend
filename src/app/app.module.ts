import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBotComponent } from './main-bot/main-bot.component';
import { BotBubbleComponent } from './mainBot/bot-bubble/bot-bubble.component';
import { UserBubbleComponent } from './main-bot/user-bubble/user-bubble.component';
import { BubbleComponent } from './main-bot/bubble/bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBotComponent,
    BotBubbleComponent,
    UserBubbleComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
