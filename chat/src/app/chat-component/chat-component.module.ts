import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponentComponent } from './chat-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';



const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@NgModule({
    declarations: [
        ChatComponentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SocketIoModule.forRoot(config),
        ReactiveFormsModule
    ]
})
export class ChatComponentModule { }
