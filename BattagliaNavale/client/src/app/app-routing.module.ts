import { BattagliaComponent } from './battaglia/battaglia.component';
import { GameListComponent } from './game-list/game-list.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { UserListComponent } from './user-list/user-list.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { UserSignupComponent } from './user-signup/user-signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'gamelist', component: GameListComponent },
  { path: 'battaglia', component: BattagliaComponent },
  { path: 'sendmessages', component: MessageEditorComponent },
  { path: 'messages', component: MessageListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
