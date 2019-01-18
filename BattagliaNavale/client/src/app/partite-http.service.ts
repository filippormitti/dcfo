import { Game } from './Game';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { UserService } from './user.service';




@Injectable()
export class PartiteHttpService {

  private partite = [];

  constructor( private http: HttpClient, private us: UserService ) {
      }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        'body was: ' + JSON.stringify(error.error));
    }

    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable('Something bad happened; please try again later.');
  }

  private create_options(params = {}  ) {
    return  {
      headers: new HttpHeaders({
        authorization: 'Bearer ' + this.us.get_token(),
        'cache-control': 'no-cache',
        'Content-Type':  'application/json',
      }),
      params: new HttpParams( {fromObject: params} )
      
    };

  }

  get_gamelist(): Observable<Game[]> {
    return this.http.get<Game[]>( this.us.url + '/games/status/'+0, this.create_options({limit: '10', skip: '0'}   )).pipe(
                catchError( this.handleError )
      );
  }
  get_gameid(id:string): Observable<Game[]> {
    return this.http.get<Game[]>( this.us.url + '/games/'+id, this.create_options({limit: '10', skip: '0'}   )).pipe(
                catchError( this.handleError )
      );
  }
  get_turn(game:string,id:string): Observable<boolean> {
     return this.http.get<boolean>( this.us.url + '/games/'+game+'/turn/'+id, this.create_options({limit: '10', skip: '0'}   )).pipe(
                catchError( this.handleError )
      );
  }
  get_grid(id:string): Observable<object[]> {
    return this.http.get<object[]>( this.us.url + '/games/'+id+'/battlefields', this.create_options({limit: '10', skip: '0'}   )).pipe(
               catchError( this.handleError )
     );
 }
  join_game(dati:object): Observable<boolean> {
        return this.http.post<object>( this.us.url + '/games/join', dati,this.create_options({limit: '10', skip: '0'}   )).pipe(
       
        catchError( this.handleError )
      );
  }
  
  post_game( id: object): Observable<Game> {
       return this.http.post<Game>( this.us.url + '/games', id,  this.create_options() ).pipe(
      catchError(this.handleError)
    );
  }
  post_ship( dati: object): Observable<boolean> {
    return this.http.post<boolean>( this.us.url + '/ships', dati, this.create_options() ).pipe(
   catchError(this.handleError)
 );
}
post_shot( dati: object): Observable<boolean> {
  return this.http.post<boolean>( this.us.url + '/games/shot', dati, this.create_options() ).pipe(
 catchError(this.handleError)
);
}
 

 }