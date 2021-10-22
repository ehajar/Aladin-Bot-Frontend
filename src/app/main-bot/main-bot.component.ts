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

  language: LangModel | null = null;

  loading: boolean = false;

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
    if (!this.isShown) {
      this.language = null;
    }
  }

  async processMessage(userMessage: String) {
    if (!this.language)
      this.processLanguage(userMessage).then(() => {
        //this.processTextAdvanced(userMessage);
        this.processText(userMessage);
      });
    else
      //this.processTextAdvanced(userMessage);
      this.processText(userMessage);

  }
  async processMessage_New(userMessage: String) {
    if (!this.language)
      this.processLanguage(userMessage).then(() => {
        this.processTextAdvanced(userMessage);
      });
    else
      this.processTextAdvanced(userMessage);
  }

  async processLanguage(userMessage: String) {
    this.loading = true;
    await this.http.post<{ langCode: Number, lang: String }>("http://localhost:3030/API/language/get", {
      message: userMessage
    }).subscribe((e) => {
      if (e.langCode == -1) {
        this.addUnknownLanguage();
      } else {
        this.language = getMyLanguage(e.langCode);
        console.log(this.language, e.langCode);
        this.addIKnowYourLanguage();
      }
      this.loading = false;
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

  processText(userMessage: String) {
    if (userMessage.includes("made you")) {
      setTimeout(() => {
        this.addReply("My creators are both <strong>Hajar EL HAKOUR</strong> & <strong>Anass AIT BEN EL ARBI</strong> for their project")

      }, 800)
    }
  }

  processTextAdvanced(userMessage: String) {
    this.loading = true;

    this.http.post<{ data: Array<{ catCode: Number, cat: String }> }>("http://localhost:3030/API/coms/communicate", {
      message: userMessage,
      langCode: this.language?.code || 1
    }).subscribe((e) => {
      for (let x of e.data) {
        const str = (this.language || new LangModel()).getFromCode(x.catCode);
        this.addReply(str);
      }
      this.loading = false;
    })
  }


  // PRIMARY FUNCTION
  sendMessage() {
    this.addMessage(this.userMessage);

    this.processMessage(this.userMessage);
    //this.processMessage_New(this.userMessage);  // TODO TEST REQUIRED!!!
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

  resetBotData() {
    this.language = null;
    this.chatMessages = [];
  }
}
