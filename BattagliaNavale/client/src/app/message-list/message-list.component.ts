import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../Message';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  private messages: Message[] = [];

  constructor( private sio: SocketioService , private ms: MessageService, private us: UserService, private router: Router ) { }

  ngOnInit() {
    this.get_receivermessages(this.us.get_mail());
    this.sio.connect().subscribe( (m) => {
    this.get_receivermessages(this.us.get_mail());
  });
  }
  public get_receivermessages(mail:string) {
       this.ms.get_receivermessages(mail).subscribe(
      ( messages ) => {
        this.messages = messages;
      } , (err) => {

        // Try to renew the token
        this.us.renew().subscribe( () => {
          // Succeeded
          this.get_receivermessages(this.us.get_mail());
        }, (err2) => {
          // Error again, we really need to logout
          this.logout();
        } );
      }
    );
  }
  
  logout() {
    this.us.logout();
    this.router.navigate(['/']);
  }

}
