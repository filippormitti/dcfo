import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { MessageListComponent } from './message-list/message-list.component';

// Services
import { PartiteService } from './partite.service';
import { PartiteHttpService } from './partite-http.service';
import { MessageService } from './message.service';
import { MessageHttpService } from './message-http.service';
import { UserService } from './user.service';
import { UserHttpService } from './user-http.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { SocketioService } from './socketio.service';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './user-list/user-list.component';
import { GameListComponent } from './game-list/game-list.component';
import { BattagliaComponent } from './battaglia/battaglia.component';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    AppComponent,
    MessageEditorComponent,
    MessageListComponent,
    UserLoginComponent,
    UserSignupComponent,
    MenuComponent,
    UserListComponent,
    GameListComponent,
    BattagliaComponent,
    ChatComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: UserService, useClass: UserHttpService },
    {provide: PartiteService, useClass: PartiteHttpService },
    {provide: SocketioService, useClass: SocketioService },
    {provide: MessageService, useClass: MessageHttpService /* Here we can select the specifc service instance */}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
