import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Socket } from 'ngx-socket-io';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { ChatComponentModule } from './chat-component/chat-component.module';

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@Injectable()
export class SocketOne extends Socket {
  constructor() {
    super({ url: 'http://url_one:portOne', options: {} });
  }
}

@Injectable()
export class SocketTwo extends Socket {
  constructor() {
    super({ url: 'http://url_two:portTwo', options: {} });
  }
}
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    // RouterModule.forRoot([]),
    FormsModule,
    AppRoutingModule,
    ChatComponentModule
  ],
  providers: [
    SocketOne,
    SocketTwo,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
