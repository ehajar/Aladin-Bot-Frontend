import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import ChatMessage from "../Models/ChatMessage";
import ServiceHelper from "../services/ServiceHelper";
import {HttpClient} from "@angular/common/http";
import LangModel from "../languages/LangModel";
import getMyLanguage from "../languages/MyLanguage";

@Component({
  selector: 'app-main-bot',
  templateUrl: './main-bot.component.html',
  styleUrls: ['./main-bot.component.scss']
})
export class MainBotComponent implements OnInit {

  chatMessages: Array<ChatMessage> = [];
  @Input() isShown: boolean = false;
  userMessage: String = "";
  serviceHelper: ServiceHelper;

  language : LangModel | null = null;

  @ViewChild('messageList') messageListElem: ElementRef | undefined;
  @ViewChild('textFiled') textFiled: ElementRef | undefined;


  constructor(private http: HttpClient) {
    this.serviceHelper = new ServiceHelper(http)
  }


  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      if (!this.isNotEmpty()) {
        this.sendMessage();
      }
    }

  }


  ngOnInit(): void {


  }


  processMessage(userMessage: String) {
    if(this.language == null ) this.processLanguage(userMessage);

    this.processText(userMessage);

  }

  processLanguage(userMessage: String){
    this.http.post<{langCode: Number, lang: String}>("http://localhost:3030/API/language/get",{message:userMessage}).subscribe((e)=>{
      if (e.langCode == -1){
        this.addUnknownLanguage();
      }else{
        this.language = getMyLanguage(e.langCode);
        this.addIKnowYourLanguage();
      }
    })
  }

  private addUnknownLanguage() {
    this.addReply("I don't understand you! can you repeat?");
  }

  addIKnowYourLanguage() {
    // @ts-ignore
    this.addReply(this.language.detectedLang);
    // @ts-ignore
    this.addReply(this.language.greetings);
  }

  processText(userMessage: String){
    if(userMessage.includes("made you")){
      this.addReply("My creators are both <strong>Hajar EL HAKOUR</strong> & <strong>Anass AIT BEN EL ARBI</strong> for their project")
    }
  }


  sendMessage() {
    this.addMessage(this.userMessage);

    this.processMessage(this.userMessage);
    this.userMessage = "";
  }


  addMessage(message: String) {
    this.chatMessages.push(new ChatMessage(message.trim(), false));
    setTimeout(() => {

      if (this.messageListElem != undefined)
        this.messageListElem.nativeElement.scrollTop = this.messageListElem.nativeElement.scrollHeight;
    }, 100)
  }


  addReply(message: String) {
    this.chatMessages.push(new ChatMessage(message.trim(), true));
    setTimeout(() => {

      if (this.messageListElem != undefined)
        this.messageListElem.nativeElement.scrollTop = this.messageListElem.nativeElement.scrollHeight;
    }, 100)
  }

  isNotEmpty() {
    return this.userMessage.trim().length == 0;
  }
}
