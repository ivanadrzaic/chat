import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private socket: Socket) { }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  getMessage() {
    return this.socket.fromEvent('message').pipe(
      map((data: any) => {
        if (typeof data === 'object' && data.hasOwnProperty('msg')) {
          return data.msg as string;
        }
        return '';
      })
    );
  }
}
