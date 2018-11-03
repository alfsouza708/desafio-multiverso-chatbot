import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Mensagem } from '../models/mensagens';
import { ChatbotService } from '../service/chatbot.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public mensagem: string = '';
  public mensagens = new Array<Mensagem>();
  public typing = false;
  public error = false;
  public contexto: any;

  @ViewChild('scroll') private myScrollContainer: ElementRef;

  constructor(private service: ChatbotService) {
    this.mensagens = [];
   }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  enviarMensagem(){
    this.typing = true;
    this.error = false;
    let msg = new Mensagem();
    msg.mensagem = this.mensagem;
    msg.watson = false;
    this.mensagem = '';
    this.mensagens.push(msg);
    this.service.submitMessage(msg.mensagem, this.contexto).subscribe(
      (response) => {
        setTimeout(()=>{
          this.contexto = response.context;
          let sentenca = new Mensagem();
          let text = '';
          response.output.text.forEach(element => {
            text += ' ' + element;
          });
          sentenca.mensagem = text;
          sentenca.watson = true;
          this.typing = false;
          this.mensagens.push(sentenca);        
        }, (Math.random() * (2 - 1) + 1) * 1000);
      }, (error) => {
        this.typing = false;
        this.error = true;
      }
    );
  }

}
