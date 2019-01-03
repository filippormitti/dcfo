
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


}
