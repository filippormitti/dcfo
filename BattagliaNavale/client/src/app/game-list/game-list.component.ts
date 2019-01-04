import { Component, OnInit } from '@angular/core';
import { PartiteService } from '../partite.service';
import { Game} from '../Game';
import { UserService } from '../user.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  private games: Game[] = [];
  
  constructor( private sio: SocketioService , private gm:PartiteService, private us: UserService, private router: Router ) { }

  ngOnInit() {
    this.get_listgames();
   
   
  }

  public get_listgames() {
       this.gm.get_gamelist().subscribe(
      ( games ) => {
        this.games = games;
      } , (err) => {

        // Try to renew the token
        this.us.renew().subscribe( () => {
          // Succeeded
          this.get_listgames();
        }, (err2) => {
          // Error again, we really need to logout
          this.logout();
        } );
      }
    );
  }

  public Join_user( idgame: number,idus:number ) {
    
 console.log('sto passando IDgame: ' + idgame + ' e IDuser' + idus );
 
  }
  
  public Create_game( idus:number ) {
    
    console.log('sto generando una nuova partita con IDuser' + idus );
    
     }
  

  logout() {
    this.us.logout();
    this.router.navigate(['/']);
  }

}
