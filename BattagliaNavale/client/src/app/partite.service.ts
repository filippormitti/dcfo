import { Game } from './Game';

import { Injectable } from '@angular/core';
import jwtdecode = require('jwt-decode');
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PartiteService {
    private partite = [];
  
  constructor() { }
  
  




  get_gamelist( ): Observable<any> {
    return of( this.partite );
  }
  get_gameid(id:string ): Observable<any> {
    return of( this.partite );
  }
  get_grid(id:string, userId:string ): Observable<any> {
    return of( this.partite );
  }
  get_turn( game:string,id:string ): Observable<boolean> {
    return of( );
  }
 
  join_game( dati:object): Observable<boolean> {
    return of( );
  }

  post_game( id: object): Observable<Game> {
    
       return of();
  }
  post_ship( dati:object): Observable<boolean> {
    return of( );
  }
  post_shot( dati:object): Observable<boolean> {
    return of( );
  }
  get_id() {
    return ;
  }
}
