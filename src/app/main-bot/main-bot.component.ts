import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import ChatMessage from "../Models/ChatMessage";
import {ServiceHelper} from "../services/service-helper.service";

@Component({
  selector: 'app-main-bot',
  templateUrl: './main-bot.component.html',
  styleUrls: ['./main-bot.component.scss']
})
export class MainBotComponent implements OnInit {

  // all the chat history
  chatMessages: Array<ChatMessage> = [];
  @Input() isShown: boolean = false;

  // user input
  userMessage: String = "";

  language: number = 1;
  langDetected = false;

  // 3 dots visibility
  loading: boolean = false;

  @ViewChild('messageList') messageListElem: ElementRef | undefined;


  constructor(private serviceHelper: ServiceHelper) {}

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
      this.langDetected = false;
    }
  }

  processMessage(userMessage: String) {
    if (!this.langDetected)
      this.processLanguage(userMessage);
    else
      this.processTextAdvanced(userMessage);
  }

  processLanguage(userMessage: String) {
    this.loading = true;
    this.serviceHelper.processLanguage(userMessage).subscribe((e) => {
      console.log(e);
      if (e.langCode == -1) { // unknown language
        this.addUnknownLanguage(e.message);
        this.loading = false;
      } else { // known language
        this.language = e.langCode
        this.langDetected = true;
        this.addIKnowYourLanguage(e.message);
        this.processTextAdvanced(userMessage);
      }
    })
  }

  addUnknownLanguage(message: string) {
    this.addReply(message);
  }

  addIKnowYourLanguage(message: string) {
    this.addReply(message);

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

    this.serviceHelper.processText(userMessage, this.language).subscribe((res) => {
      console.log(res);
      res.map((e) => {
        this.addReply(e);
        this.loading = false;
      })
    })
  }

  sendMessage() {
    this.addMessage(this.userMessage);

    this.processMessage(this.userMessage);
    this.userMessage = "";
  }

  addMessage(message: String) {
    this.chatMessages.push(new ChatMessage(message.trim(), false));
    this.delayedScroll()
  }

  delayedScroll(){
    setTimeout(() => {
      if (this.messageListElem != undefined)
        this.messageListElem.nativeElement.scrollTop = this.messageListElem.nativeElement.scrollHeight;
    }, 100)
  }

  addReply(message: String) {
    this.chatMessages.push(new ChatMessage(message.trim(), true));
    this.delayedScroll()
  }

  isNotEmpty() {
    return this.userMessage.trim().length == 0;
  }

  resetBotData() {
    this.language = 1;
    this.langDetected = false;
    this.chatMessages = [];
    this.userMessage = "";
    this.loading = false;
  }


}
