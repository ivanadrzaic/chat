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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    AppRoutingModule,
    ChatComponentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
