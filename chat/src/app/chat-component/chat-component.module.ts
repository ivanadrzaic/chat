import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponentComponent } from './chat-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ChatComponentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ChatComponentModule { }
