import { Game } from './../Game';
import { Component, OnInit,Input } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../Message';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SocketioService } from '../socketio.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input('theGame') theGame: Game;
private messages: Message[] = [];
private chat: Message;

  constructor( private sio: SocketioService , private ms: MessageService, private us: UserService, private router: Router ) { }

  ngOnInit() {
   this.get_receivermessages(this.theGame._id);
   this.set_empty();
  }
  set_empty() {
  this.chat = { tags: [], content: '', timestamp: new Date(), authormail: '',receiver:this.theGame._id };
  }
  public get_receivermessages(mail:string) {
       this.ms.get_receivermessages(mail).subscribe(
      ( messages ) => {
        this.messages = messages;
      } , (err) => {

        // Try to renew the token
        this.us.renew().subscribe( () => {
          // Succeeded
          this.get_receivermessages(this.theGame._id);
        }, (err2) => {
          // Error again, we really need to logout
          this.logout();
        } );
      }
    );
  }
  post_message( ) {
    this.chat.timestamp = new Date();
    this.ms.post_message( this.chat ).subscribe( (m) => {
      console.log('chatposted');
      this.set_empty();
     

    }, (error) => {
      console.log('Error occurred while posting: ' + error);

    });
  }

  logout() {
    this.us.logout();
    this.router.navigate(['/']);
  }

}
