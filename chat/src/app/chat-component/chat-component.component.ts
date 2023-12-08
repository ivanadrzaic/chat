// chat.component.ts
import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat-component.component.html',
  styleUrl: './chat-component.component.scss'
})
export class ChatComponentComponent {
  message: string = '';
  messages: string[] = [];

  constructor(private chatService: ChatService) {
    this.chatService.getMessage().subscribe((msg: string) => {
      this.messages.push(msg);
    });
  }

  sendMessage() {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}
