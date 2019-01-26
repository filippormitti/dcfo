import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Message } from './Message';
import { mockmessages } from './mock-messages';

@Injectable()
export class MessageService {

  private messages = [];

  constructor( ) { }

  get_messages(): Observable<Message[]> {
    return of( this.messages );
  }

  get_receivermessages(mail:string): Observable<Message[]> {
      return of( this.messages );
  }

  post_message( m: Message ): Observable<Message> {
    
    this.messages.unshift(m);
    return of(m);
  }

}
