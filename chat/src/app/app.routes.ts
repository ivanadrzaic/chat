import { RouterModule, Routes } from '@angular/router';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/chat', pathMatch: 'full' },
    { path: 'chat', component: ChatComponentComponent },
   ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
